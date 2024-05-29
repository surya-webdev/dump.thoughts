import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://minzicfyvscpgndktopt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbnppY2Z5dnNjcGduZGt0b3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NzkzNjAsImV4cCI6MjAzMjQ1NTM2MH0.c2zEU1vixm1a6l3drFvAea4UGDi37bVR96WJwfRogwQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
