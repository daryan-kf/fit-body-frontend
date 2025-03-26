import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

// Function to fetch the current session
const fetchSession = async () => {
  const {
    data: { session }
  } = await supabase.auth.getSession();
  return session;
};

export const useGetLoggedInUser = () => {
  const queryClient = useQueryClient();

  const {
    data: session,
    isLoading,
    error
  } = useQuery({
    queryKey: ['session'],
    queryFn: fetchSession
  });

  useEffect(() => {
    // Setup auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // Update React Query cache whenever auth state changes
        queryClient.setQueryData(['session'], session);
      }
    );

    // Clean up listener when component unmounts
    return () => authListener.subscription.unsubscribe();
  }, [queryClient]);

  return { session, isLoading, error };
};
