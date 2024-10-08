import Rye from '@/shared/assets/img/rye1.png';
import Cultbit from '@/shared/assets/img/Cultbit1.png';
import UIP from '@/shared/assets/img/Unique_individuals_photo1.png';
import { Text } from '@/shared/ui/Text';
import { BoxProps, ProjectItem } from './ui/ProjectItem';

const items: BoxProps[] = [
  {
    src: UIP,
    title: 'Унікальні особини',
    subTitle:
      'Ми об’єднали сили науки та мистецтва для збереження біорізноманіття українського степу.',
  },
  {
    src: Cultbit,
    title: 'Cultbit: Інтелектуальна пригода у форматі AR',
    subTitle: 'Це як PokemonGo, тільки у всесвіті української культури.',
  },
  {
    src: Rye,
    subTitle:
      'Ми сприяємо соціалізації та зниженню психічного напруження родин переселенців через реалізацію заходів культурно-мистецького спрямування.',
    title:
      'Жито: проєкт соціальної адаптації внутрішньо переміщеним особам засобами мистецтва',
  },
];

const OurProjects = () => {
  return (
    <section className="w-full p-5">
      <Text
        Tag="h2"
        text="Наші проекти"
        color="base/BG_block"
        textType="Desktop/H2"
        className="mx-auto mb-10 w-full max-w-[1128px] text-[36px] md:text-[48px]"
      />
      <ul className="flex w-full flex-col gap-10">
        {/* box */}
        {items.map((el, i) => {
          return <ProjectItem key={i} {...el} />;
        })}
      </ul>
    </section>
  );
};

export default OurProjects;
