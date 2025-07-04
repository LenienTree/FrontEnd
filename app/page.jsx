"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,Users,Trophy,Globe,Star,ArrowRight,CheckCircle,Lightbulb, Code,Target,Menu, X,ChevronLeft,ChevronRight,MapPinned} from "lucide-react"
import Link from "next/link"
import { useState,useEffect } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email,setEmail]=useState(null)
  const date= new Date()
  const month=date.toLocaleString("defailt",{month:"long"})

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const eventDate = new Date('2025-07-19T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

const handleClick=()=>{
  console.log(email)
  if(email){
    alert("The message has been send succefully")
  }
  setTimeout(()=>{
     window.location.reload();
  },1000)
}

  return (
    <div className=" max-w-8xl items-center">
    <div className="flex flex-col  bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-teal-500/20 bg-gray-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-black to-white border border-teal-400/30">
             <img src="./lenienttree.png" className="rounded-lg"/>
            </div>
            <span className="text-xl font-bold text-teal-400">LeninetTree</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors">
              Home
            </Link>
            <Link href="#eventCal" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Calendar
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              About Us
            </Link>
            <Link
              href="#subscription"
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
              <Link href="#home" className="text-sm font-medium text-teal-400">
                Home
              </Link>
              <Link href="#calendar" className="text-sm font-medium text-gray-300 hover:text-teal-400">
                Calendar
              </Link>
              <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-teal-400">
                About Us
              </Link>
              <Link href="#subscription" className="text-sm font-medium text-gray-300 hover:text-teal-400">
                Subscription
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-90 py-10 md:py-24 lg:py-30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-4xl">
                <Badge className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 py-3 text-sm border border-teal-400/30">
                  🚀 The Ultimate Innovation Platform
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Where Innovation
                  </span>
                  <br />
                  <span className="text-white">Meets Opportunity</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl leading-relaxed">
                  Join LeninetTree - the premier platform connecting brilliant minds with groundbreaking hackathons,
                  ideathons, conclaves, and webinars. Showcase your events and be part of the innovation revolution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/eventsubmission">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-lg px-8 py-6 border border-teal-400/30"
                >
                  Submit Your Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                 <Link href="#calendar">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-teal-400/30 text-teal-400 hover:bg-teal-400/10 bg-transparent"
                >
                  
                  Explore Events
                  <Globe className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-teal-400" />
                  <span>4K+ Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span>200+ Colleges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-400" />
                  <span>100K₹+ in Prices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Most Highlighted Event - Full Screen Promotion */}
        <section className="w-full min-h-screen relative overflow-hidden bg-gray-900 flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="BNBv1.png"
              alt="BNB Hack Keral"
              className="w-full h-full object-cover transform translate-x-[100px] max-[800px]:translate-x-[100]"/>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/40"></div> 
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>

          {/* Content */}
          <div className="container  px-5 mt-2  md:px-6 relative z-10">
            <div className="max-w-4xl">
              {/* Event Badge */}
              <div className="flex items-center space-x-3 mb-5">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 md:px-6 py-1 md:py-3 text-sm md:text-md lg:text-md font-semibold border border-yellow-400/30 animate-pulse">
                  🏆 MOST HIGHLIGHTED EVENT
                </Badge>
                <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2">
                  LIVE REGISTRATION
                </Badge>
              </div>

              {/* Event Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  BNB HACK
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">KERALA</span>
              </h1>

              {/* Event Description */}
              <p className="text-xl md:text-1xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Build AI, DeSoc, DeSci & DePIN on BNB Chain @Kochi, Kerala
              </p>

              {/* Event Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-2">$100K</div>
                  <div className="text-gray-400 text-sm">Total Prizes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-400 text-sm">Participants</div>
                </div>
                
              </div>

              {/* Event Info */}
              <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-teal-400" />
                  <span className="text-md">July 19-20, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinned className="h-5 w-5 text-purple-400" />
                  <span className="text-md">Kochi, Kerala</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span className="text-md">100+ Registered</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Badge
                  variant="outline"
                  className="bg-purple-500/10 text-purple-400 border-purple-500/30 px-4 py-2 text-sm"
                >
                  Blockchain
                </Badge>
                <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-2 text-sm">
                  Artificial Inteligence
                </Badge>
                
                <Badge
                  variant="outline"
                  className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 px-4 py-2 text-sm"
                >
                  DeSoc
                </Badge>
                <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30 px-4 py-2 text-sm">
                  DeSci
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-500/10 text-green-400 border-green-500/30 px-4 py-2 text-sm"
                >
                  DePin
                </Badge>
              </div>

              {/* Call to Action Buttons */}
              
              <div className="flex flex-col sm:flex-row gap-3">
                 <a href="https://lu.ma/437vucc3" className="">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold text-lg px-10 py-6 border border-yellow-400/30 shadow-lg shadow-yellow-500/25"
                >
                  Register Now - for FREE!
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
               
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-400/50 text-teal-400 hover:bg-teal-400/10 text-md px-10  py-6 bg-gray-900/50 backdrop-blur-sm"
                  
                >
                  View Website
                  <Globe className="ml-3 h-6 w-6" />
                </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 text-md px-10 py-6 bg-gray-900/50 backdrop-blur-sm"
                >
                  View Schedule
                </Button>
              </div>

              {/* Countdown Timer */}
             
            </div>
             <div className="mt-12 mb-4 lg:mb-1 p-7 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-teal-500/20">
                <div className="text-center mb-5">
                    <h3 className="text-xl font-semibold text-white mb-2">Event Starts In</h3>
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                      <div className="text-center">
                        <div className="text-2xl md:text-5xl font-bold text-teal-400">{timeLeft.days}</div>
                        <div className="text-xs text-gray-400">DAYS</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-5xl font-bold text-purple-400">{timeLeft.hours}</div>
                        <div className="text-xs text-gray-400">HOURS</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-5xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                        <div className="text-xs text-gray-400">MINUTES</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-5xl font-bold text-red-400">{timeLeft.seconds}</div>
                        <div className="text-xs text-gray-400">SECONDS</div>
                      </div>
                      </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    ⚡ Limited seats available • 🎯 Teams Filling quickly   
                  </p>
                </div>
              </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="w-full py-16 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
                Event Categories
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover different types of innovation events tailored to your interests and expertise
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Hackathon */}
              <Card className="bg-gray-800/50 border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                <CardHeader className="text-center">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mx-auto mb-3"></div>
                  <CardTitle className="text-xl text-teal-400">Hackathon</CardTitle>
                  <CardDescription className="text-gray-400">
                    Intensive coding competitions where developers build innovative solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Active Events:</span>
                      <span className="text-teal-400 font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month:</span>
                      <span className="text-teal-400 font-semibold">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ideathon */}
              <Card className="bg-gray-800/50 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                <CardHeader className="text-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-3"></div>
                  <CardTitle className="text-xl text-yellow-400">Ideathon</CardTitle>
                  <CardDescription className="text-gray-400">
                    Creative brainstorming sessions focused on generating innovative ideas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Active Events:</span>
                      <span className="text-yellow-400 font-semibold">16</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month:</span>
                      <span className="text-yellow-400 font-semibold">5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Webinar - Advanced */}
              <Card className="bg-gray-800/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <CardHeader className="text-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-3"></div>
                  <CardTitle className="text-xl text-red-400">Tech Fest/ Expo's</CardTitle>
                  <CardDescription className="text-gray-400">
                    Professional development sessions and advanced technical workshops
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Active Events:</span>
                      <span className="text-red-400 font-semibold">18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month:</span>
                      <span className="text-red-400 font-semibold">6</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Webinar */}
              <Card className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <CardHeader className="text-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mx-auto mb-3"></div>
                  <CardTitle className="text-xl text-purple-400">Webinar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Online educational sessions and workshops for skill development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Active Events:</span>
                      <span className="text-purple-400 font-semibold">32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month:</span>
                      <span className="text-purple-400 font-semibold">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calendar Widget */}
        <section id="eventCal" className="w-full py-16 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
                Event Calendar
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Stay updated with upcoming events and never miss an opportunity to innovate
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800/50 border-teal-500/30 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                    
                      <h3 className="text-2xl font-bold text-white">{month}</h3>
                      <p className="text-gray-400">2025</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-teal-400">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-teal-400">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-sm text-gray-400 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {/* Previous month dates */}
                    {[ 30, 31].map((date) => (
                      <div key={`prev-${date}`} className="text-center text-gray-600 py-3 text-sm">
                        {date}
                      </div>
                    ))}

                    {/* Current month dates */}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                      const hasEvent = [ 5,6,8, 11, 12,13,15, 18,19,20, 22, 25, 28].includes(date)
                      const eventTypes = {
                        5:"purple",
                        6:"purple",
                        8: "red",
                        11: "purple",
                        12:"red",
                        13:"red",
                        15: "teal",
                        18: "yellow",
                        19:"teal",
                        20:"teal",
                        22: "red",
                        25: "purple",
                        28: "teal",
                      }
                      const eventColor = eventTypes[date]

                      return (
                        <div
                          key={date}
                          className={`relative text-center py-3 text-sm cursor-pointer rounded-lg transition-colors ${
                            date === 1
                              ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                              : "text-gray-300 hover:bg-gray-700/50"
                          }`}
                        >
                          {date}
                          {hasEvent && (
                            <div className="flex justify-center space-x-1 mt-1">
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  eventColor === "teal"
                                    ? "bg-teal-400"
                                    : eventColor === "yellow"
                                      ? "bg-yellow-400"
                                      : eventColor === "red"
                                        ? "bg-red-400"
                                        : "bg-purple-400"
                                }`}
                              ></div>
                            </div>
                          )}
                        </div>
                      )
                    })}

                    {/* Next month dates */}
                    {[1, 2, 3, 4,5,6,7,8,9].map((date) => (
                      <div key={`next-${date}`} className="text-center text-gray-600 py-3 text-sm">
                        {date}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Event Legend */}
              <div className="space-y-4">
                <Card className="bg-gray-800/50 border-teal-500/30 p-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Event Types</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <span className="text-teal-400 font-medium">Hackathon</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-yellow-400 font-medium">Ideathon</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-red-400 font-medium">Tech Fest/ Expo's</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-400 font-medium">Webinar</span>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gray-800/50 border-purple-500/30 p-4">
                  <h4 className="text-lg font-semibold text-white mb-4">This Week</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">Jan 5,6 - Starlet</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Jan 5 - Design Thinking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">Jan 8 - Tech Leadership</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Top Events Section */}
        <section id="calendar" className="w-full py-16 bg-gray-800/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
                Top Events & Success Stories
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We celebrate every event and showcase the incredible innovations that emerge from our community
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Ongoing Event */}
              <Link href="https://ieee.fisat.ac.in/TechXQuintessence/">
              <Card className="bg-gray-800/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 overflow-hidden">
                <div className="relative group">
                  <img
                    src="./𝗧𝗲𝗰𝗵𝗫𝗤𝘂𝗶𝗻𝘁𝗲𝘀𝘀𝗲𝗻𝗰𝗲.jpg"
                    alt="𝗧𝗲𝗰𝗵𝗫𝗤𝘂𝗶𝗻𝘁𝗲𝘀𝘀𝗲𝗻𝗰𝗲"
                    className="w-full h-80 object-fit"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">𝗧𝗲𝗰𝗵𝗫𝗤𝘂𝗶𝗻𝘁𝗲𝘀𝘀𝗲𝗻𝗰𝗲 </h3>
                      <p className="text-gray-200 text-sm">2- day flagship event of 𝐈𝐄𝐄𝐄 𝐂𝐒 𝐒𝐁𝐂 𝐅𝐈𝐒𝐀𝐓, under the 𝐈𝐄𝐄𝐄 𝐂𝐒 𝐒𝐘𝐏 𝐓𝐞𝐜𝐡𝐗 𝐈𝐧𝐢𝐭𝐢𝐚𝐭𝐢𝐯𝐞 and in collaboration with 𝐈𝐄𝐄𝐄 𝐂𝐒 𝐊𝐞𝐫𝐚𝐥𝐚 𝐂𝐡𝐚𝐩𝐭𝐞𝐫.
</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-green-500/20 text-green-400 border border-green-500/30">
                    ONGOING
                  </Badge>
                  <Star className="absolute top-4 right-4 h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Calendar className="h-4 w-4 text-teal-400" />
                      <span>July 12-13, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Users className="h-4 w-4 text-purple-400" />
                      <span>200+ participants</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs bg-teal-500/10 text-teal-400 border-teal-500/30">
                        TechFest
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-purple-500/10 text-purple-400 border-purple-500/30"
                      >
                        AI
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>

              {/* Completed Event */}
              <Link href="https://girlathon24.vercel.app/">
              <Card className="bg-gray-800/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
                <div className="relative group">
                  <img
                    src="./Girlathon.jpg"
                    alt="Climate Tech Ideathon"
                    className="w-full h-80 object-fit"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">Girlathon</h3>
                      <p className="text-gray-200 text-sm">
                         an inclusive hackathon exclusively designed for women
                      </p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    COMPLETED
                  </Badge>
                  <div className="absolute top-4 right-4 flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Successfully completed</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Users className="h-4 w-4 text-purple-400" />
                      <span>800 participants</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs bg-green-500/10 text-green-400 border-green-500/30">
                        Climate
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      >
                        Sustainability
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>

              {/* Upcoming Event */}
              <Link href="https://evoke25.vercel.app/">
              <Card className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden">
                <div className="relative group">
                  <img
                    src="/Evoke.jpg"
                    alt="Healthcare Innovation Summit"
                    className="w-full h-80 object-fit"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">Evoke 2025  Project Expo</h3>
                      <p className="text-gray-200 text-sm">This vibrant event serves as a launchpad for young innovators to showcase functional prototypes, hardware builds, and IoT-based system-level solutions that tackle real-world problems.</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    UPCOMING
                  </Badge>
                  <Star className="absolute top-4 right-4 h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Calendar className="h-4 w-4 text-teal-400" />
                      <span>Augest 02, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Users className="h-4 w-4 text-purple-400" />
                      <span>Call for Ambassadors</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs bg-red-500/10 text-red-400 border-red-500/30">
                        CreateAndElevate
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-pink-500/10 text-pink-400 border-pink-500/30">
                        Expo
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            </div>

            <div className="text-center mt-12">
              {/* <Button
                size="lg"
                variant="outline"
                className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10 bg-transparent"
              >
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <section id="about" className="w-full py-16 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
                Why Choose LeninetTree?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We're more than just a platform - we're your partner in creating and discovering amazing innovation
                events
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-800/30 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center border border-teal-400/30">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Global Reach</h3>
                <p className="text-gray-400">
                  Connect with innovators worldwide and showcase your events to a global audience of passionate creators
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-800/30 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center border border-yellow-400/30">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Innovation Focus</h3>
                <p className="text-gray-400">
                  We specialize in hackathons, ideathons, conclaves, and webinars, ensuring your event reaches the right
                  innovative minds
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-800/30 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center border border-red-400/30">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Targeted Promotion</h3>
                <p className="text-gray-400">
                  Our advanced algorithms ensure your events reach participants who are genuinely interested and
                  qualified
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-800/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center border border-purple-400/30">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Easy Integration</h3>
                <p className="text-gray-400">
                  Simple event submission process with powerful tools to manage registrations and track engagement
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-800/30 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center border border-orange-400/30">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Success Tracking</h3>
                <p className="text-gray-400">
                  Comprehensive analytics and success metrics to help you understand and improve your event impact
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-gray-800/30 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center border border-pink-400/30">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Community Support</h3>
                <p className="text-gray-400">
                  Join a thriving community of event organizers and innovators who support and learn from each other
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section
          id="subscription"
          className="w-full py-16 bg-gradient-to-r from-teal-600/20 via-purple-600/20 to-pink-600/20 border-y border-teal-500/20"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Showcase Your Event?
                </h2>
                <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
                  Join thousands of successful event organizers who trust LeninetTree to amplify their innovation
                  events. We care about your success and are committed to helping you reach the right audience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="eventsubmission">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-lg px-8 py-6 border border-teal-400/30"
                >
                  Submit Your Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10 text-lg px-8 py-6 bg-transparent"
                >
                  Schedule a Demo
                </Button>
              </div>

              <div className="max-w-md mx-auto">
                <p className="text-sm text-gray-400 mb-4">Get notified about trending events and platform updates</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-teal-400"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                  />
                  <Button onClick={handleClick}  className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 border border-teal-400/30">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-teal-400">4000+</div>
                <div className="text-gray-400">Active Participants</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-400">200+</div>
                <div className="text-gray-400">Coleges</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-yellow-400">100K₹+</div>
                <div className="text-gray-400">Total Prize Money Given</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-green-400">95%</div>
                <div className="text-gray-400">Organizer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  )
}
