import { useEffect, useState } from 'react';
import { Social } from '../../components/Social';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

interface LinkProps {
  id: string,
  titulo: string,
  url: string,
  bg: string,
  color: string
}

interface SocialLinksProps {
  facebook: string,
  instagram: string,
  linkedin: string,
  github: string
}

export function Home() {
  const [links, setLinks] = useState<LinkProps[]>([])
  const [socialLinks, getSocialLinks] = useState<SocialLinksProps>()

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links")
      const queryRef = query(linksRef, orderBy("created", "asc"))

      getDocs(queryRef)
        .then((snapshot) => {
          const lista = [] as LinkProps[];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              titulo: doc.data().titulo,
              url: doc.data().url,
              bg: doc.data().bg,
              color: doc.data().color,
            })
          })

          setLinks(lista)
        })
    }

    loadLinks();
  }, [])

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef)
        .then((snapshot) => {
          if (!snapshot.exists()) return;

          const data = snapshot.data();

          getSocialLinks({
            facebook: data.facebook ?? "",
            instagram: data.instagram ?? "",
            linkedin: data.linkedin ?? "",
            github: data.github ?? ""
          });
        })
        .catch((error) => {
          console.error("Erro ao carregar links:", error);
        });
    }

    loadSocialLinks();
  }, []);

  return (
    <div className="flex flex-col w-full py-6 px-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">Dhanglerson Dev</h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          <section
            style={{ backgroundColor: link.bg }}
            key={link.id}
            className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
            <a href={link.url} target='_blank'>
              <p className="text-base md:text-lg" style={{ color: link.color }}>
                {link.titulo}
              </p>
            </a>
          </section>
        ))}

        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Social url={socialLinks.facebook}>
              <FaFacebook size={44} color="#2A27F5" />
            </Social>

            <Social url={socialLinks.instagram}>
              <FaInstagram size={44} color="#F52761" />
            </Social>

            <Social url={socialLinks.linkedin}>
              <FaLinkedin size={44} color="#2776F5" />
            </Social>

            <Social url={socialLinks.github}>
              <FaGithub size={44} color="#000000" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  )
}