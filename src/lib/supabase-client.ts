import { createClient } from "@supabase/supabase-js";

// 環境変数からSupabaseのURLとKeyを取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseKey);
