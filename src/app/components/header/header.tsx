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
    <header className={`container ${styles.headerWrapper}`}>
      <nav className={`wrapper ${styles.headerNav}`}>
      <div>
            <ToggleTheme />
          </div>
        <section className={styles.navInfo}>
          <h3>{`${user.name} ${user.lastname}`}</h3>
          <div className={styles.profileImageContainer}></div>
          
        </section>
      </nav>
    </header>
  );
};

export default Header;
