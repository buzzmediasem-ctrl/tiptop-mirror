CREATE POLICY "Authenticated can submit a quote request"
  ON public.quotes FOR INSERT TO authenticated WITH CHECK (true);

GRANT INSERT ON public.quotes TO authenticated;