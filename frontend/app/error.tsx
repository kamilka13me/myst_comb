'use client';

export default function GlobalError({ reset }: {
  reset: () => void;
}) {
  return (
    <main >
      <p>title_error<span> :(</span></p>
      {/* <MainButton onClick={() => reset()}>{t('btn_home')}</MainButton> */}
    </main>
  );
}