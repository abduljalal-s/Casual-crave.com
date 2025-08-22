"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"

type ProtectedRouteProps = {
  children: ReactNode
  redirectTo?: string
}

export default function ProtectedRoute({
  children,
  redirectTo = "/login", // default redirect
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(redirectTo)
    }
  }, [status, router, redirectTo])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session?.user) {
    return null // wait until redirect
  }

  return <>{children}</>
}
