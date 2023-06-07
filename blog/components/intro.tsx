import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Neon Navigators.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A pulsating, neon-drenched VR adventure for Oculus Quest 2, where you navigate complex digital realms to escape an AI's clutches.
      </h4>
    </section>
  )
}

export default Intro
