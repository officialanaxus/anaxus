// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fkszynbtfguizhjlwmhh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrc3p5bmJ0Zmd1aXpoamx3bWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5MjUxMzksImV4cCI6MjA0NjUwMTEzOX0.6nV_wH2FN5kvIfuc25NPYz0R4G-7NCrfeaFEkIDjiyA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);