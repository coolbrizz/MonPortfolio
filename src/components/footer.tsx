function Footer() {
  return (
    <footer className="bg-customBlue text-white py-12">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid text-center md:grid-cols-3 gap-8">
          <div className="flex flex-col  items-center gap-4">
            <h3 className="text-2xl font-bold">Me contacter</h3>
            <div className="flex flex-row ">
              <ul className="flex justify-center items-center space-x-6">
                <li className="relative group list-none">
                  <a
                    href="mailto:tonywebdev@hotmail.com"
                    aria-label="Email"
                    className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:h-full" />
                    <span className="relative z-10 top-[-2px] text-gray-700 text-2xl font-bold transition-colors duration-300 ease-in-out group-hover:text-white">
                      @
                    </span>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#000000] text-white text-sm px-2 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-bottom-12 transition-all duration-300 ease-in-out">
                    Email
                  </div>
                </li>

                {/* Whatsapp */}
                <li className="relative group list-none">
                  <a
                    href="https://wa.me/33658092835"
                    aria-label="Whatsapp"
                    className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:text-black hover:shadow-lg"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-[#25D366] transition-all duration-300 ease-in-out group-hover:h-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="relative z-10 w-7 h-7"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#25D366] text-black text-sm px-2 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-bottom-12 transition-all duration-300 ease-in-out">
                    Whatsapp
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-customBlue3">
              Création de solutions digitales sur mesure pour votre succès en
              ligne.
            </p>
            <p className="text-customBlue3">
              Accompagnement personnalisé pour embellir votre projet.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Me suivre</h3>
            <div className="flex flex-col justify-center items-center gap-4">
              <ul className="flex justify-center items-center space-x-6">
                {/* Facebook */}
                <li className="relative group">
                  <a
                    href="https://www.facebook.com/tonywebdev/?locale=fr_FR"
                    aria-label="Facebook"
                    className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-[#3b5998] transition-all duration-300 ease-in-out group-hover:h-full" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="relative z-10 w-7 h-7"
                    >
                      <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                    </svg>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#3b5998] text-white text-sm px-2 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-bottom-12 transition-all duration-300 ease-in-out">
                    Facebook
                  </div>
                </li>

                {/* Instagram */}
                <li className="relative group">
                  <a
                    data-social="instagram"
                    aria-label="Instagram"
                    href="https://www.instagram.com/tonywebdev_/"
                    className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
                  >
                    {/* Overlay color on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-tr from-[#405de6] via-[#b33ab4] to-[#fd1f1f] transition-all duration-300 ease-in-out group-hover:h-full group-hover:opacity-100 opacity-80 z-10" />
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 16 16"
                      className="bi bi-instagram transition-colors duration-300 ease-in-out z-20"
                      fill="currentColor"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        // use CSS for white color on hover via parent .group
                        transition: "color 0.3s",
                        color: "inherit",
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      ></path>
                    </svg>
                    {/* Custom: Use a span for a hidden element for focus ring etc if needed */}
                    <style>{`
                        a[data-social="instagram"]:hover svg,
                        li.group:focus-within svg {
                          color: white !important;
                          fill: white !important;
                        }
                        a[data-social="instagram"]:hover svg path,
                        li.group:focus-within svg path {
                          fill: white !important;
                        }
                      `}</style>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-[#405de6] via-[#b33ab4] to-[#fd1f1f] text-white text-sm px-2 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-bottom-12 transition-all duration-300 ease-in-out">
                    Instagram
                  </div>
                </li>
                <li className="relative group">
                  <a
                    href="https://www.linkedin.com/in/antony-auvray-669bb6353/"
                    aria-label="Facebook"
                    className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
                    data-social="facebook"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-[#3b5998] transition-all duration-300 ease-in-out group-hover:h-full group-hover:opacity-100 opacity-80 z-10" />
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 16 16"
                      className="bi bi-facebook z-20 transition-colors duration-300 ease-in-out"
                      fill="currentColor"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transition: "color 0.3s, fill 0.3s",
                        color: "inherit",
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      ></path>
                    </svg>
                    {/* Custom CSS : SVG BLANC AU HOVER */}
                    <style>{`
                        a[data-social="facebook"]:hover svg,
                        li.group:focus-within svg {
                          color: white !important;
                          fill: white !important;
                        }
                        a[data-social="facebook"]:hover svg path,
                        li.group:focus-within svg path {
                          fill: white !important;
                        }
                      `}</style>
                  </a>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#3b5998] text-white text-sm px-2 py-1 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-bottom-12 transition-all duration-300 ease-in-out">
                    Facebook
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-customBlue3">
        <p>&copy; 2025 TonyWebDev. Tous droits réservés.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="/mentions-legales"
            className="text-gray-400 hover:text-white transition"
          >
            Mentions Légales
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
