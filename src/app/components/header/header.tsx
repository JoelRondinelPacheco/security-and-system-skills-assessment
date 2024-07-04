import React from "react";
import styles from "./styles.module.css";
import ToggleTheme from "../toggle-theme/toggle-theme";
import { getDefaultUser } from "@/lib/user/application/getDefaultUserUseCase";
import { User } from "@/lib/user/domain/user";
import { createUserMockRepository } from "@/lib/user/infrastructure/mock-repository";

const userRepository = createUserMockRepository();

const Header = async () => {
  const user: User = await getDefaultUser(userRepository);

  return (
    <header className={`global-wrapper ${styles.headerWrapper}`}>
      <nav className={styles.headerNav}>
        <div>Title</div>
        <section className={styles.navInfo}>
          {user.name} {user.lastname}
          <div>
            <ToggleTheme />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
