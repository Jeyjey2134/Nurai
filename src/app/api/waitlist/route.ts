import { NextResponse } from 'next/server'
import { supabase } from '@/utils/supabaseClient'

export async function POST(request: Request) {
  const { email } = await request.json()
  if (!email) {
    return NextResponse.json({ error: 'E-Mail fehlt' }, { status: 400 })
  }

  const { error } = await supabase
    .from('waitlist_emails')
    .insert([{ email }])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true })
} 