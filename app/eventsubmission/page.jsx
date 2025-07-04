"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Trophy, Rocket } from "lucide-react"
import { useState } from "react"
import EventSubmissionForm from "../../components/event-submission-form.jsx"
import { Menu,X } from "lucide-react"

export default function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900">
      {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-teal-500/20 bg-gray-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
           
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-black to-white border border-teal-400/30">   
             <img src="./lenienttree.png" className="rounded-lg"/>
            </div>
            <span href="./" className="text-xl font-bold text-teal-400">LeninetTree</span>
        
          
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors">
              Home
            </Link>
            <Link href="./#eventCal" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Calendar
            </Link>
            <Link href="./#about" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              About Us
            </Link>
            <Link
              href="./#subscription"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors"
            >
              Subscriptions
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
           
            <Button
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 border border-teal-400/30"
            >
              Get Started
            </Button>
            <button
              className="md:hidden text-gray-300 hover:text-teal-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-teal-500/20 bg-gray-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="./#home" className="text-sm font-medium text-teal-400">
                Home
              </Link>
              <Link href="./#calendar" className="text-sm font-medium text-gray-300 hover:text-teal-400">
                Calendar
              </Link>
              <Link href="./#about" className="text-sm font-medium text-gray-300 hover:text-teal-400">
                About Us
              </Link>
              <Link href="./#subscription" className="text-sm font-medium text-gray-300 hover:text-teal-400">
                Subscription
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <Badge className="mb-8 bg-gradient-to-r from-teal-400 to-purple-500 text-white border-0 px-6 py-2 text-sm">
          <Rocket className="w-4 h-4 mr-2" />
          The Ultimate Innovation Platform
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">
            Where Innovation
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Meets Opportunity
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mb-12 leading-relaxed">
          Join LeninetTree - the premier platform connecting brilliant minds with groundbreaking hackathons, ideathons,
          conclaves, and webinars. Showcase your events and be part of the innovation revolution.
        </p>

       

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Users className="w-5 h-5 text-teal-400" />
            <span>4K+ Members</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span>200+ Colleges</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>100K$+ in Prizes</span>
          </div>
        </div>
      </div>

      {/* Event Submission Form Section */}
      <div id="submit-event" className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Submit Your Event</h2>
            <p className="text-gray-300 text-lg">
              Share your innovation event with our community and connect with brilliant minds
            </p>
          </div>
          <EventSubmissionForm />
        </div>
      </div>


      <footer className="w-full py-12 bg-gray-900 border-t border-teal-500/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-purple-500 border border-teal-400/30">
                  <img src="./lenienttree.png" className="rounded-lg"/>
                </div>
                <span className="text-xl font-bold text-teal-400">LeninetTree</span>
              </div>
              <p className="text-gray-400">
                Connecting innovators with opportunities worldwide. Your success is our mission.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Platform</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Submit Event
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Browse Events
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Success Stories
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Analytics
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Community
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Resources
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} LeninetTree. All rights reserved. Built with ❤️ Dvelpoment Team LeninetTree.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
