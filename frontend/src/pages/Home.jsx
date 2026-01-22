import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11l-7 7-7-7m0 0V5m0 0h12" />
                </svg>
                <span className="text-2xl font-bold text-white">HealthCare Hub</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#services" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Services</a>
              <a href="#about" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">About Us</a>
              <a href="#contact" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Contact Us</a>
              <Link to="/login" className="text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md text-sm font-medium transition backdrop-blur">Login</Link>
              <Link to="/signup" className="text-blue-600 bg-white hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#dots)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-100">✨ Advanced Healthcare Platform</span>
                  <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                    Your Health,<br/>Our Priority
                  </h1>
                  <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                    Experience world-class healthcare services from the comfort of your home. Book appointments with top specialists, access your medical records, and receive expert care anytime, anywhere.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-xl">
                    Get Started
                  </Link>
                  <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/30 transition backdrop-blur border border-white/30">
                    Log In
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-blue-200">Expert Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm text-blue-200">Happy Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-50 blur-xl"></div>
                <img
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-96 lg:h-full"
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Medical professionals"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From routine check-ups to specialized surgeries, we provide a complete range of medical services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Expert Consultations',
                description: 'Connect with experienced doctors from various specializations for personalized care.',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80'
              },
              {
                icon: '🔬',
                title: 'Advanced Surgery',
                description: 'State-of-the-art surgical facilities with trained specialists for complex procedures.',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
              },
              {
                icon: '💊',
                title: 'Prescription Management',
                description: 'Easy prescription handling and direct pharmacy integration for your convenience.',
                image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80'
              },
              {
                icon: '📋',
                title: 'Medical Records',
                description: 'Secure digital storage of all your health records and medical history in one place.',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80'
              },
              {
                icon: '🩺',
                title: 'Lab Testing',
                description: 'Wide range of diagnostic tests and lab reports available at your fingertips.',
                image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80'
              },
              {
                icon: '💉',
                title: 'Emergency Care',
                description: '24/7 emergency medical services with quick response and expert treatment.',
                image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(to bottom right, #3b82f6, #1d4ed8)';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-4xl">{service.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Surgery/Advanced Procedures Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-500/30 text-blue-200 rounded-full text-sm font-semibold">Advanced Procedures</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                World-Class Surgical Excellence
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our state-of-the-art surgical facilities and highly trained surgeons specialize in minimally invasive and complex procedures.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Robotic Surgery</h4>
                    <p className="text-gray-400 text-sm">Precision-guided surgical interventions with minimal recovery time</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Laparoscopic Surgery</h4>
                    <p className="text-gray-400 text-sm">Minimally invasive procedures with faster healing</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Organ Transplants</h4>
                    <p className="text-gray-400 text-sm">Expert transplant teams with excellent success rates</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80" 
                alt="Modern surgery"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-96"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from patients who have experienced our exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                title: 'Heart Surgery Patient',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                text: 'The surgical team was incredibly professional. I felt safe and well-informed throughout the entire process. My recovery has exceeded expectations!',
                rating: 5
              },
              {
                name: 'Dr. Michael Chen',
                title: 'Consultation Patient',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                text: 'The doctors here listen carefully and provide comprehensive treatment plans. The booking system is super convenient and the staff is always helpful.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                title: 'Preventive Care',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
                text: 'Amazing experience with the annual checkup. The doctors found a minor issue early which could have become serious. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-blue-100 p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-30 blur-xl"></div>
              <img
                className="relative mx-auto rounded-2xl shadow-2xl w-full object-cover h-96"
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hospital facility"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">About HealthCare Hub</span>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                Excellence in Healthcare Delivery
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                HealthCare Hub is dedicated to revolutionizing patient care through innovative technology and compassionate healthcare professionals. We believe that quality healthcare should be accessible, affordable, and convenient for everyone.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">World-Class Medical Team</h4>
                    <p className="text-gray-600">Experienced surgeons and specialists with international certifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Advanced Technology</h4>
                    <p className="text-gray-600">Latest medical equipment and AI-powered diagnostic tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Patient-Centric Approach</h4>
                    <p className="text-gray-600">Personalized care plans tailored to individual needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Get in Touch With Us
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Have questions about our services? Our dedicated support team is here to help you 24/7.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/30 backdrop-blur">
                      <svg className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="text-blue-200 text-lg">+1 (555) 123-4567</p>
                    <p className="text-blue-300 text-sm">Mon-Fri, 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/30 backdrop-blur">
                      <svg className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-blue-200 text-lg">support@healthcarehub.com</p>
                    <p className="text-blue-300 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/30 backdrop-blur">
                      <svg className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Location</p>
                    <p className="text-blue-200 text-lg">123 Medical Center Blvd</p>
                    <p className="text-blue-300 text-sm">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <span className="text-white">𝕏</span>
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <span className="text-white">in</span>
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-6 bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input type="text" placeholder="What is this about?" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea rows="5" placeholder="Tell us more..." className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11l-7 7-7-7m0 0V5m0 0h12" />
                </svg>
                <span>HealthCare Hub</span>
              </h3>
              <p className="text-gray-400 text-sm">Providing world-class healthcare services with compassion and excellence.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Doctor Consultations</a></li>
                <li><a href="#" className="hover:text-white transition">Surgery</a></li>
                <li><a href="#" className="hover:text-white transition">Lab Testing</a></li>
                <li><a href="#" className="hover:text-white transition">Emergency Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-300 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition">HIPAA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">&copy; 2025 HealthCare Hub. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12a4 4 0 100-8 4 4 0 000 8zm0-7a3 3 0 110 6 3 3 0 010-6zm5.646-1.354a.5.5 0 00-.707 0l-5.5 5.5a.5.5 0 00.707.707l5.5-5.5a.5.5 0 000-.707z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20a11.6 11.6 0 0011.6-11.6c0-.18 0-.36-.01-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.21 8.21 0 01-2.605.996 4.1 4.1 0 00-7.655 3.74A11.64 11.64 0 012.95 4.69a4.1 4.1 0 001.27 5.477A4.072 4.072 0 012.28 9.88v.05a4.1 4.1 0 003.285 4.016 4.092 4.092 0 01-1.853.07 4.106 4.106 0 003.833 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
