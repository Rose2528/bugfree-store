// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'BugFree Store',
  description: 'A small demo store — styled, but intentionally buggy checkout for testing demos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-white/90 backdrop-blur-sm border-b">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500
               rounded-full flex items-center justify-center text-white font-bold">S</div>
              <div>
                <h1 className="text-lg font-semibold">BugFree Store</h1>
                <p className="text-xs text-gray-500 -mt-1">TestSprite AI tested demo</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <a href="/" className="text-md text-gray-700 hover:text-gray-900">Home</a>
              {/* ❌ Bug: Cart button invisible due to wrong CSS */}
              <a href="/cart" className="text-md cart-button">Go to Cart</a>
              <a href="/checkout" className="text-md px-3 py-1 rounded-md bg-blue-600
               text-white hover:bg-blue-700">Checkout</a>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>

        <footer className="mt-20 border-t">
          <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} BugFree Store — Demo site
          </div>
        </footer>
      </body>
    </html>
  )
}
