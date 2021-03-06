import React from "react"
import Section from "./section"

function Testimonials() {
  return (
    <Section sectionClasses="bg-blue-500 text-white">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">Testimonials</h2>
      </div>
      <div className="mt-12 mb-8">
        <blockquote className="md:px-24 py-3 md:py-6 mb-4">
          <p className="mb-4 text-xl md:text-3xl text-center leading-normal">
            “I was so relieved to find Chris. After starting a Squarespace
            website, I quickly became frustrated by how long it was taking for
            me to figure out how to build my website and get it to look how I
            wanted. Instead of watching tutorial videos over and over, I was
            able to sit with Chris and build most of my website in 2 hours, with
            the understanding to then complete it and make future changes
            myself. Chris is super knowledgeable, patient, easy to work with,
            and unique in his approach of empowering business owners to
            understand their own technology. I'd highly recommend him if you are
            looking to learn how to get your website off the ground, or having
            technical issues that you can't solve yourself.”
          </p>
          <cite className="block text-center md:text-right">
            Andrea Knox, MA
            <br />
            <a
              className="text-white hover:text-blue-900"
              href="https://thepostpartumplanner.com/"
            >
              The Postpartum Planner
            </a>
          </cite>
        </blockquote>
        <blockquote className="md:px-24 py-3 md:py-6 mb-4">
          <p className="mb-4 text-xl md:text-3xl text-center leading-normal">
            “Chris saved me from a disaster. He listened, got to the root of the
            issue, and fixed my website woes in record time!”
          </p>
          <cite className="block text-center md:text-right">
            Dr. Kelly Beischel
            <br />
            Life Coach
            <br />
            <a
              className="text-white hover:text-blue-900"
              href="https://drbpresents.com/"
            >
              Dr. B. Presents, LLC
            </a>
          </cite>
        </blockquote>
        <blockquote className="md:px-24 py-3 md:py-6 mb-4">
          <p className="mb-4 text-xl md:text-3xl text-center leading-normal">
            “Compared to other tech consultants and developers, Chris has a way
            with words that makes difficult tech concepts seem really simple and
            approachable. Even when a certain explanation didn't meet the mark,
            it seemed like he could tell if I was confused, and then try another
            way of explaining.”
          </p>
          <cite className="block text-center md:text-right">
            Rie Tulali
            <br />
            Owner
            <br />
            <a
              className="text-white hover:text-blue-900"
              href="https://www.teacurious.com/"
            >
              TeaCurious
            </a>
          </cite>
        </blockquote>
        <blockquote className="md:px-24 py-3 md:py-6 mb-4">
          <p className="mb-4 text-xl md:text-3xl text-center leading-normal">
            “Chris has a strong ability to patiently understand business
            requirements (as expressed by a non-technical person), ask the right
            questions, push back in the right areas, and in the end deliver
            extremely sound, robust code.”
          </p>
          <cite className="block text-center md:text-right">
            Myles Younger
            <br />
            Director of Marketing
            <br />
            <a
              className="text-white hover:text-blue-900"
              href="https://www.mightyhive.com/"
            >
              MightyHive
            </a>
          </cite>
        </blockquote>
      </div>
    </Section>
  )
}

export default Testimonials
