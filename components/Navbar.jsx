import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";

const LINKS = [
  {
    href: "/admin/dashbard",
    name: "Dashboard",
  },
  {
    href: "/admin/panel-1",
    name: "Admin Panel 1",
  },
  {
    href: "/admin/panel-2",
    name: "Admin Panel 2",
  },
];

function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <section className={styles.logoHolder}>
        <Link href="/">
          <Image
            src={`/images/logo.png`}
            width={151}
            height={45}
            alt="Intressanta hus"
          />
        </Link>
      </section>

      <ul>
        {LINKS.map((link, i) => {
          return (
            <li
              key={i}
              className={
                link.href === router.pathname ? styles.active : styles.inactive
              }
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
