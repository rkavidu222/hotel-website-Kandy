import React from 'react';
export const About = () => {
  return <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
            About Villa Vajrapani
          </h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Inspired by the ancient Buddhist principle of Vajrapani — the power
            of the mind rooted in the present moment — our luxury resort offers
            a unique haven for relaxation and renewal.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop" alt="Villa Vajrapani resort view" className="rounded-md shadow-lg object-cover h-full w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              A Sanctuary of Luxury and Tranquility
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover a sanctuary of luxury and tranquility nestled in the
              pristine western foothills of the Hanthana Mountains in Sri Lanka.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Villa Vajrapani, we are dedicated to holistic wellbeing,
              harmonizing the mind, body, and spirit. Our eco-resort is a haven
              where nature's serenity meets refined elegance, offering a
              transformative retreat for those seeking rejuvenation and inner
              peace.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Inspired by Zen principles and modern minimalism, every aspect of
              Villa Vajrapani is meticulously designed to create an atmosphere
              of calm and mindfulness. From the architecture to the
              surroundings, our resort invites you to immerse yourself in the
              present moment, fostering a sense of deep relaxation and
              contemplation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you seek a peaceful escape or a journey of self-discovery,
              Villa Vajrapani is your gateway to a timeless experience of
              healing and renewal. Welcome to a space where luxury meets
              tranquility, and every moment is an opportunity to reconnect with
              yourself and the natural world.
            </p>
          </div>
        </div>
      </div>
    </section>;
};