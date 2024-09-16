import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-client";

export async function GET() {
  const { data, error } = await supabase.from("poi").select("*");
  console.log(data );

  if (error) {
    console.error("Error fetching POI data:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("Fetched POI data:", data);
  return NextResponse.json(data);
}
