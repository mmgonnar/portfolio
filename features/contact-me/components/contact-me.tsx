'use client';

import { NeobrutalistButton } from '@/features/footer';
import { Modal } from '@/features/projects';
import ContentSection from '@/features/ui/components/content-section';
import TerminalBanner from '@/features/ui/components/terminal-banner';
import { useModal } from '@/hooks/useModa';
import { TypeAnimation } from 'react-type-animation';
import Form from './form';
import CyberpunkFormCard from '@/features/ui/components/form-inspo';

export default function ContactMe() {
  const { modalOpen, toggleModal } = useModal();
  console.log(modalOpen, 'clic');
  return (
    <section
      id="contact-me"
      className="mb-15 flex w-full flex-col items-center justify-between gap-4 md:gap-10 md:pt-15 md:pb-15"
    >
      <ContentSection
        id="contact-me__section"
        title="Contact"
        text="¿Tienes un proyecto? Hablemos. Disponible para colaborar en proyectos web y diseño de interfaces. Enfoque en React/Next.js, Tailwind y buenas prácticas."
        align="center"
      />
      <TerminalBanner
        className="h-50 md:h-60"
        childrenClassName="block text-left m-auto md:m-0"
        terminalContentClassName="hidden md:block text-sm md:text-sm custom-md:text-lg md:max-w-full"
        terminalContent={
          <TypeAnimation
            sequence={[
              'console> node connect.js',
              1000,
              'console> status: 200 OK',
              1000,
              'console> say: "Hello!"',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        }
      >
        <NeobrutalistButton
          text="Contact me ;)"
          variant="secondary"
          className="hover:bg-amber-400"
          onClick={() => {
            (console.log('clic'), toggleModal());
          }}
        />
      </TerminalBanner>
      <Modal
        modalOpen={modalOpen}
        toggleModal={() => {
          toggleModal();
        }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-[3px]"
        // classNameBackgrpound='fixed inset-0 z-40 flex h-40 items-center justify-center bg-black/40'
      >
        <Form />
      </Modal>
    </section>
  );
}
