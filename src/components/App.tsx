@@ .. @@
 import React from 'react';
 import Header from './components/Header';
 import Hero from './components/Hero';
 import Services from './components/Services';
+import FullWidthPhoto from './components/FullWidthPhoto';
 import About from './components/About';
 import Testimonials from './components/Testimonials';
 import Contact from './components/Contact';
 import Footer from './components/Footer';

 function App() {
   return (
     <div className="min-h-screen">
       <Header />
       <Hero />
       <Services />
+      <FullWidthPhoto />
       <About />
       <Testimonials />
       <Contact />
       <Footer />
     </div>
   );
 }