'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [copied, setCopied] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Function to handle email sending
  const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    const recipient = 'omkarsalunkheatp1211@gmail.com'
    const subject = formData.subject || 'Contact from Portfolio Website'
    const body = `I'm ${formData.name} my email id is ${formData.email}\n\n${formData.message}`
    
    // Create a direct Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank')
  }
  
  // Function to copy email and message to clipboard
  const copyToClipboard = () => {
    const recipient = 'omkarsalunkheatp1211@gmail.com'
    const subject = formData.subject || 'Contact from Portfolio Website'
    const body = `I'm ${formData.name} my email id is ${formData.email}\n\n${formData.message}`
    
    const textToCopy = `Email: ${recipient}\nSubject: ${subject}\n\n${body}`
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
      })
  }

  return (
    <div className="min-h-screen py-12 bg-[#F4EBD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#122620] mb-4">Contact Me</h1>
          <p className="text-xl text-[#122620]">
            Get in touch with me for any questions or opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-[#122620] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#F4EBD0] mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#D6AD60] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#F4EBD0]">Email</h3>
                  <p className="text-[#B68D40]">omkarsalunkheatp1211@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#D6AD60] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#F4EBD0]">Location</h3>
                  <p className="text-[#B68D40]">Sangli, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-[#D6AD60] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#F4EBD0]">Social</h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://github.com/omkarsalunkheatp1211"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B68D40] hover:text-[#D6AD60]"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/omkarsalunkhe1211/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B68D40] hover:text-[#D6AD60]"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#122620] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#F4EBD0] mb-6">Send Message</h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#D6AD60] mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#F4EBD0] border border-[#B68D40] rounded-md focus:ring-[#D6AD60] focus:border-[#D6AD60] text-[#122620]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#D6AD60] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#F4EBD0] border border-[#B68D40] rounded-md focus:ring-[#D6AD60] focus:border-[#D6AD60] text-[#122620]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#D6AD60] mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#F4EBD0] border border-[#B68D40] rounded-md focus:ring-[#D6AD60] focus:border-[#D6AD60] text-[#122620]"
                  placeholder="Email subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#D6AD60] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#F4EBD0] border border-[#B68D40] rounded-md focus:ring-[#D6AD60] focus:border-[#D6AD60] text-[#122620]"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={handleSendEmail}
                  className="w-full bg-[#B68D40] text-[#F4EBD0] py-2 px-4 rounded-md hover:bg-[#D6AD60] transition-colors duration-200"
                >
                  Open in Gmail
                </button>
                
                <button
                  onClick={copyToClipboard}
                  className="border-2 border-[#B68D40] text-[#F4EBD0] px-6 py-2 rounded-lg font-medium hover:bg-[#B68D40] transition-colors duration-200"
                >
                  {copied ? "Copied!" : "Copy Message"}
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-[#F4EBD0] text-sm">
                  You can also email me directly at: <a href="mailto:omkarsalunkheatp1211@gmail.com" className="text-[#D6AD60] hover:underline">
                    omkarsalunkheatp1211@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 