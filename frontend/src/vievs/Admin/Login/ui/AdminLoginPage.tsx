import { Text } from '@/shared/ui/Text';

const AdminLoginPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Text
          textType="Desktop/H3"
          Tag="h3"
          text="Вхід у кабінет"
          color="base/BG_block"
        />
        <Text
          textType="Desktop/H3"
          Tag="h3"
          text="адміністратора"
          color="base/BG_block"
        />
      </div>
    </div>
  );
};

export { AdminLoginPage };
