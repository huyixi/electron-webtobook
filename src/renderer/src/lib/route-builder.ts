import { RouteObject } from 'react-router-dom'
import React, { ReactNode } from 'react'

type GlobImport = Record<string, () => Promise<any>>

export function buildGlobRoutes(globImports: GlobImport): RouteObject[] {
  const routes: RouteObject[] = []

  for (const path in globImports) {
    const route = pathToRoute(path, globImports[path])
    if (route) {
      routes.push(route)
    }
  }

  return routes
}

function pathToRoute(path: string, importFn: () => Promise<any>): RouteObject | null {
  const match = path.match(/^\.\/pages\/(.+)\.tsx$/)
  if (!match) return null

  let routePath = match[1].toLowerCase()
  if (routePath.endsWith('/index')) {
    routePath = routePath.slice(0, -6) || '/'
  }

  routePath = routePath.replace(/\[(.+)\]/g, ':$1')

  return {
    path: routePath,
    element: React.lazy(() => importFn().then((mod) => ({ default: mod.default }))) as ReactNode
  }
}
