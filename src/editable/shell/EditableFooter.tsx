'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t-4 border-[#f5bc33] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white">
              <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-8 w-8 object-contain" />
            </span>
            <span className="editable-display text-xl font-semibold tracking-[0.01em]">{SITE_CONFIG.name}</span>
          </Link>
        </div>

    

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#38bfd3]">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Contact', '/contact'],
              ['Search', '/search'],
              ...(session ? [['Create', '/create']] : [['Sign in', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-medium text-white/68 transition hover:text-white">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-semibold text-white/80 transition hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-white/8 px-4 py-5 text-center text-xs font-medium tracking-[0.12em] text-white/56">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
