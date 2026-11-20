GRANT INSERT ON public.quotes TO anon;
GRANT SELECT ON public.quotes TO authenticated;
GRANT ALL ON public.quotes TO service_role;
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
GRANT EXECUTE ON FUNCTION public.has_role TO anon;
GRANT EXECUTE ON FUNCTION public.has_role TO authenticated;