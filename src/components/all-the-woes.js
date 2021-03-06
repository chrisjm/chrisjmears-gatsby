import React from "react"
import Section from "./section"
import Heading2 from "./heading2"

function AllTheWoes() {
  return (
    <Section>
      <Heading2 title="What kind of Website Woes do you have?" />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center max-w-lg mb-8 bg-gray-100 border rounded-lg p-5">
          <div className="mb-8">
            <h2 className="mb-4 text-center text-4xl font-bold">Minor Woes</h2>
            <p>
              Simple-ish tasks which can be solved in one or two 30-60 minute
              1-on-1 sessions.
            </p>
          </div>
          <div className="flex-1 mb-5 md:mr-5 py-5">
            <div className="w-24 mx-auto mb-6">
              <svg
                className="fill-current h-24 w-24"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5 12h-4c-.553 0-1 .448-1 1s.447 1 1 1h4v2c0 .56.073 1.101.197 1.623-1.786.75-3.277 2.139-4.107 3.963-.229.503-.007 1.096.496 1.324.506.229 1.097.004 1.324-.496.612-1.346 1.707-2.375 3.02-2.937.892 1.554 2.363 2.729 4.116 3.24l1.007-6.042-6.053-6.054zm13.839 5.425c.097-.461.161-.935.161-1.425v-2h4c.553 0 1-.448 1-1s-.447-1-1-1h-4v-2.697c1.7-.768 3.111-2.13 3.91-3.889.229-.503.007-1.096-.496-1.324-.507-.23-1.097-.005-1.324.496-.944 2.074-3.025 3.414-5.302 3.414h-6.374l-2-2h9.586c0-2.761-2.239-5-5-5-2.633 0-4.767 2.042-4.962 4.624l-5.331-5.331c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l22 22c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414zm-4.886 5.293c.767-.224 1.475-.581 2.109-1.034l-2.738-2.738z" />
              </svg>
            </div>
            <h3 className="mb-1 text-2xl font-bold">Fix Bugs & Glitches</h3>
            <p className="leading-tight">
              Website glitches are a pain in the butt. Don't let bugs stop your
              customers from interacting and paying you.
            </p>
          </div>
          <div className="flex-1 mb-5 md:mr-5 py-5">
            <div className="w-24 mx-auto mb-6">
              <svg
                className="fill-current h-24"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m3 0v11h18v-11zm4 17h2v4c0 1.657 1.343 3 3 3s3-1.343 3-3v-4h2c2.209 0 4-1.791 4-4h-18c0 2.209 1.791 4 4 4zm5 3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
              </svg>
            </div>
            <h3 className="mb-1 text-2xl font-bold">Theme Updates</h3>
            <p className="leading-tight">
              Is your website "coded" and you can't make updates to a page? Let
              me help you so you can keep your brand up-to-date.
            </p>
          </div>
          <div className="flex-1 mb-5 md:mr-5 py-5">
            <div className="w-24 mx-auto mb-6">
              <svg
                className="fill-current h-24"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m16 1-9 3-7-3v19l7 3 9-3 8 3v-19zm-13 12c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm4 0c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm4 0c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm9.707.793c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.793-1.793-1.793 1.793c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l1.793-1.793-1.793-1.793c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l1.793 1.793 1.793-1.793c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-1.793 1.793z" />
              </svg>
            </div>
            <h3 className="mb-1 text-2xl font-bold">
              Sanity Check / Code Review
            </h3>
            <p className="leading-tight">
              Your agency/designer built a website in WordPress or Drupal or
              whatever. I'll check it out and get you on the path to success.
            </p>
          </div>
        </div>
        <div className="w-24"></div>
        <div className="flex flex-col items-center max-w-lg mb-8 bg-blue-700 border text-white rounded-lg p-5">
          <div className="mb-8">
            <h2 className="mb-4 text-center text-4xl font-bold">Major Woes</h2>
            <p>
              Complex projects which require a bit more attention and can last
              weeks or months.
            </p>
          </div>
          <div className="flex-1 mb-5 md:mr-5 py-5">
            <div className="w-24 mx-auto mb-6">
              <svg
                className="fill-current h-24"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m17 22c-1.104 0-2-.896-2-2h-6c0 1.104-.896 2-2 2-.552 0-1 .448-1 1s.448 1 1 1h10c.552 0 1-.448 1-1s-.448-1-1-1zm-3.121-9.293c.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l2.293 2.293-2.293 2.293c-.391.391-.391 1.023 0 1.414zm-4.465.293c.256 0 .512-.098.707-.293.391-.391.391-1.023 0-1.414l-2.293-2.293 2.293-2.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293zm12.586-13h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.105 0 2-.896 2-2v-14c0-1.104-.895-2-2-2zm-1 15h-18v-12h18z" />
              </svg>
            </div>
            <h3 className="mb-1 text-2xl">Site Transfer</h3>
            <p className="leading-tight">
              You need to switch web hosts and/or move your domain name. Let me
              take care of it so you can care for your business.
            </p>
          </div>
          <div className="flex-1 mb-5 md:mr-5 py-5">
            <div className="w-24 mx-auto mb-6">
              <svg
                className="fill-current h-24"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m20 2h-16l-4 5h24zm-8 20 12-13h-24z" />
              </svg>
            </div>
            <h3 className="mb-1 text-2xl font-bold">New Features</h3>
            <p className="leading-tight">
              Get help implementing that fancy new third-party integration which
              will skyrocket your business's bottom line.
            </p>
          </div>
          <div className="flex-1 mb-5 md:mr-5 py-5">
            <div className="w-24 mx-auto mb-6">
              <svg
                className="fill-current h-24"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 5.051v-1.328c.727-.423 1.169-1.28.938-2.225-.176-.72-.781-1.301-1.506-1.453-1.293-.271-2.432.709-2.432 1.955 0 .738.405 1.376 1 1.723v1.328c-5.053.501-9 4.764-9 9.949v5c0 2.209 1.791 4 4 4h12c2.209 0 4-1.791 4-4v-5c0-5.185-3.947-9.448-9-9.949zm-6 15.949h-.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h.5zm-1-8c0-1.105.896-2 2-2s2 .895 2 2c0 1.104-.896 2-2 2s-2-.896-2-2zm5 8h-2v-3h2zm4 0h-2v-3h2zm-1-8c0-1.105.896-2 2-2s2 .895 2 2c0 1.104-.896 2-2 2s-2-.896-2-2zm3.5 8h-.5v-3h.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
              </svg>
            </div>
            <h3 className="mb-1 text-2xl font-bold">Custom Project</h3>
            <p className="leading-tight">
              Have a web app idea, SEO optimization, security audit, or other
              custom coding project? Let me help you.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <p className="font-bold text-lg mb-2">
            Do you have any of these Website Woes?
          </p>
          <a
            href="https://calendly.com/chrisjmears/website-woes-intro"
            className="button bg-green-600 border-2 border-white hover:bg-green-500 text-white font-semibold py-3 px-5 rounded shadow-md hover:shadow-none text-2xl inline-block no-underline mb-2"
          >
            Schedule a FREE intro
          </a>
          <p>
            <em>Don't worry, this won't be a sales call.</em>
          </p>
        </div>
      </div>
    </Section>
  )
}

export default AllTheWoes
