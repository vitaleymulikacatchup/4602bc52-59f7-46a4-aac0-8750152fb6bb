"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Globe, Leaf, Mail, MessageSquare, Package, Sprout, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Pelemix"
          navItems={[
            { name: "Crops", id: "crops" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Sustainable Coconut Coir Substrates for Agriculture"
          description="Premium coir-based grow bags and substrates for vegetables and plants, designed for optimal growth and sustainability. Perfect for growers worldwide."
          tag="Premium Agriculture Solutions"
          tagIcon={Leaf}
          imagePosition="right"
          imageSrc="https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coconut coir agricultural substrate"
          buttons={[
            { text: "Explore Products", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Leading the Future of Sustainable Agriculture"
          description="We're here to assist you on your journey to sustainable and successful cultivation. Our dedicated team provides high-quality coconut coir substrates that promote optimal plant growth while supporting environmental sustainability."
          tag="Our Mission"
          tagIcon={Sprout}
          imagePosition="right"
          imageSrc="https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sustainable farming practices"
          bulletPoints={[
            {
              title: "Premium Quality",
              description: "High-quality coir-based substrates engineered for optimal plant growth and yield",
              icon: Award
            },
            {
              title: "Environmental Sustainability",
              description: "Eco-friendly coconut coir solutions that support sustainable agricultural practices",
              icon: Leaf
            },
            {
              title: "Global Reach",
              description: "Serving growers worldwide with reliable, consistent substrate solutions",
              icon: Globe
            }
          ]}
          buttons={[
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose Pelemix Substrates"
          description="Discover the advantages of our premium coconut coir substrates for your agricultural needs"
          tag="Key Benefits"
          tagIcon={Star}
          features={[
            {
              title: "Superior Water Retention",
              description: "Optimal moisture management for consistent plant growth and reduced water consumption",
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Agricultural grow bags with superior water retention"
            },
            {
              title: "Enhanced Root Development",
              description: "Excellent drainage and aeration promote healthy root systems for vegetables and plants",
              imageSrc: "https://images.pexels.com/photos/7299952/pexels-photo-7299952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Healthy vegetable growth in greenhouse"
            },
            {
              title: "100% Natural & Sustainable",
              description: "Made from renewable coconut coir, supporting eco-friendly agricultural practices",
              imageSrc: "https://images.pexels.com/photos/34558849/pexels-photo-34558849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sustainable farming practices"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Premium Product Range"
          description="High-quality coir-based substrates and grow bags designed for professional agriculture"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              name: "Coir Growing Substrate",
              price: "Contact for Pricing",
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coir growing substrate"
            },
            {
              id: "2",
              name: "Professional Grow Bags",
              price: "Contact for Pricing",
              imageSrc: "https://images.pexels.com/photos/3265437/pexels-photo-3265437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional agricultural grow bags"
            },
            {
              id: "3",
              name: "Organic Growing Medium",
              price: "Contact for Pricing",
              imageSrc: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Organic coconut coir growing medium"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Growers Say"
          description="Trusted by agricultural professionals worldwide for superior results"
          tag="Success Stories"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "David Rodriguez",
              role: "Commercial Greenhouse Manager",
              testimonial: "Pelemix substrates have transformed our operation. The consistency and quality are unmatched, leading to healthier plants and better yields.",
              imageSrc: "https://images.pexels.com/photos/7782379/pexels-photo-7782379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Rodriguez, Commercial Greenhouse Manager"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Organic Farm Owner",
              testimonial: "The sustainability aspect combined with excellent growing results makes Pelemix our preferred choice for all our crops.",
              imageSrc: "https://images.pexels.com/photos/7728657/pexels-photo-7728657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Thompson, Organic Farm Owner"
            },
            {
              id: "3",
              name: "Maria Santos",
              role: "Agricultural Consultant",
              testimonial: "I recommend Pelemix to all my clients. The water retention and drainage balance is perfect for optimal plant growth.",
              imageSrc: "https://images.pexels.com/photos/4975355/pexels-photo-4975355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Santos, Agricultural Consultant"
            },
            {
              id: "4",
              name: "James Mitchell",
              role: "Hydroponic Specialist",
              testimonial: "Outstanding product quality and excellent support. Pelemix has helped us achieve consistent results across all our growing operations.",
              imageSrc: "https://images.pexels.com/photos/7728657/pexels-photo-7728657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Mitchell, Hydroponic Specialist"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Grow with Pelemix?"
          description="If you have any questions or inquiries, or require further information, please don't hesitate to reach out to us. Our dedicated team is ready to provide you with the support you need."
          tagIcon={Mail}
          imageSrc="https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern agriculture greenhouse"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By submitting, you agree to receive information about our sustainable agriculture solutions."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Pelemix"
          copyrightText="© 2025 Pelemix. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Coir Substrates", href: "products" },
                { label: "Grow Bags", href: "products" },
                { label: "Growing Medium", href: "products" }
              ]
            },
            {
              title: "Crops",
              items: [
                { label: "Tomato", href: "crops" },
                { label: "Cucumber", href: "crops" },
                { label: "Vegetables", href: "crops" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Sustainability", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Documentation", href: "support" },
                { label: "Technical Support", href: "contact" },
                { label: "Growing Guides", href: "resources" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Mail,
              url: "mailto:info-coco@pelemix.com",
              ariaLabel: "Email us"
            },
            {
              icon: Globe,
              url: "https://pelemix.com",
              ariaLabel: "Visit our website"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}