import Image from 'next/image';
import innerHealing from '../../../img/inner-healing-bg.jpeg';
import Link from 'next/link';

export default function InnerHealing() {
  return (
    <article>
      <header className="bg-ministries">
        <section className="bg-black h-100" id="hero">
          <section className="bg-about relativexs">
            <Image src={innerHealing} alt="About Ignite" className="cover h-100 filter-black50" />
            <header>
              <h1 className="absolute-center absolut color-white text-center uppercase">Inner Healing</h1>
            </header>
          </section>
        </section>
      </header>
      <section className="container">
        <div className="row">
          <div className="grid-12">
            <h3>What is Inner Healing?</h3>
            <p className="mt-3 italic text-center">
              “Inner healing is the application of the crucified and resurrected life of Jesus Christ and His blood to those parts of my
              heart and yours that did not fully “get the message” when we first received Jesus as Savior. Inner healing is the evangelism
              to the unbelieving of hearts of believers.” – <span className="bold">John Loren and Mark Sandford</span>
            </p>
            <p className="mt-2">
              When we are born again, our spirit becomes alive and Jesus comes to dwell inside of us. But wounds from our past, lies, and
              fears can still influence our lives. Our soul still needs healing and our mind needs renewing (Romans 12:2).
            </p>
            <p className="mt-1">
              Every unhealthy behavior or habit often has a root – a lie, painful memory, or soul tie. Jesus came to restore what the enemy
              has stolen (John 10:10).
            </p>
            <p className="mt-1">
              The journey to emotional health is an invitation to intimacy with God. Every wound is an opportunity to encounter God as
              Redeemer, Healer, and Comforter.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="grid-6 mt-3">
            <h3>
              What Inner Healing is <span className="bold bg-black-light color-white">Not</span>
            </h3>
            <ul className="mt-3">
              <li>
                <span className="bold">Not</span> pastoral counseling
              </li>
              <li>
                <span className="bold">Not</span> mentoring
              </li>
              <li>
                <span className="bold">Not</span> long-term follow-up
              </li>
            </ul>
            <p className="mt-1">
              We offer issue-focused healing sessions, aiming for breakthrough in one or two appointments. For long-term care, we refer to
              professional counselors.
            </p>
          </div>

          <div className="grid-6 mt-3">
            <h3>Principles of Inner Healing</h3>
            <ul className="mt-3">
              <li>
                <span className="bold">Forgiveness:</span> Releasing others sets us free. Forgiveness is a choice of obedience to God.
              </li>
              <li>
                <span className="bold">Confession and Repentance:</span> Leads to freedom. Involves renouncing sin and receiving
                forgiveness.
              </li>
              <li>
                <span className="bold">Renouncing Lies:</span> Replace lies with God’s truth.
              </li>
              <li>
                <span className="bold">Receiving Healing:</span> Let the Holy Spirit bring truth and breakthrough.
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="grid-12 flex-center-column">
            <h3>How Does a Session Work?</h3>
            <ol className="mt-3">
              <li>
                <span className="bold">Choosing a Topic:</span> Fill out a form to identify your focus areas.
              </li>
              <li>
                <span className="bold">Prayer and Connection:</span> We start in prayer, inviting God&apos;s presence.
              </li>
              <li>
                <span className="bold">Conversation:</span> We explore root causes of emotional or spiritual issues.
              </li>
              <li>
                <span className="bold">Ministry Time:</span> With the Holy Spirit, we walk through forgiveness, repentance, and healing.
              </li>
              <li>
                <span className="bold">Practical Application:</span> Discuss how to walk in your healing daily.
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="grid-12 flex-center-column">
            <h3>How to Book a Session</h3>
            <p className="mt-3">
              <span className="bold">Step 1:</span> Fill in the form
            </p>
            <a
              className="cta-button color-gradient"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdbTIUqqD5zIKPyUBa7BdqV55uukHVHXeO7548SNNXGsbNJWg/viewform"
              target="_blank">
              Fill Out the Form
            </a>

            <p>
              <span className="bold">Step 2:</span> Book a time with your preferred minister and language
            </p>
            <a className="cta-button color-gradient" href="https://ignite-inner-healing.reservio.com/" target="_blank">
              Schedule Your Session
            </a>

            <p>
              <span className="bold">Important:</span> Don’t forget to click “CREATE BOOKING” to confirm. If you don’t receive a
              confirmation email, your booking didn’t go through.
            </p>
            <p>
              For help, email us:{' '}
              <a href="mailto:innerhealing.ignite@gmail.com" className="color-gradient">
                innerhealing.ignite@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="grid-4">
            <h3>
              Ways to <span className="bold">contribute</span>
            </h3>
            <p className="mt-1">We kindly ask you to donate and support us in the way that is possible to you!</p>
          </div>
        </div>

        <div className="row">
          <div className="grid-3 disappear"></div>
          <div className="grid-6 flex-center-column">
            <h4 className="bold">Through bank transfer</h4>
            <p className="mt-1">Ignite Church Ministries</p>
            <p className="black">IBAN | BE22 0689 4526 7047</p>
            <p className="black">Reference: Ignite inner healing</p>
            {/* <div className="row flex-center">
              <div className="grid-12 flex-center-column">
                <h5 className="bold">Site</h5>
                <p className="text-center">
                  Give your tithe or donation through a online platform totaly safe using Apple pay, Google Pay or Credit Card
                </p>
                <a href="https://donate.stripe.com/28oeVM4Ym27969q006">
                  <button className="button-secondary mt-2">Click to give</button>
                </a>
              </div>
            </div> */}
          </div>
          <div className="grid-3 disappear"></div>
        </div>

        <div className="row">
          <div className="grid-12">
            <h3>Practical informations</h3>
            <ul className="mt-3">
              <li>If you are a man, book a session with a male minister. If you are a woman, book your session with a woman.</li>
              <li>
                If the available times in our booking system don&apos;t match your agenda, write an email to innerhealing.ignite@gmail.com.
                We will try to find a solution.
              </li>
              <li>Do you want to become a minister? Email us for more info.</li>
              <li>
                People from other churches are welcome to come for inner healing. What we ask, is to communicate this to your local church,
                they are the ones walking it out with you.
              </li>
              <li>Ministry break: july and august, christmas holiday</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
