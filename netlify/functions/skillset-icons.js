exports.handler = async function () {
  const skillsetIcons = [
    {
      id: 1,
      iconUrl: "/assets/html-logo-colored.svg",
      name: "html",
    },
    {
      id: 2,
      iconUrl: "/assets/css-logo-colored.svg",
      name: "css",
    },
    {
      id: 3,
      iconUrl: "/assets/javascript-logo-colored.svg",
      name: "javascript",
    },
    {
      id: 4,
      iconUrl: "/assets/wordpress-logo.svg",
      name: "wordpress",
    },
    {
      id: 5,
      iconUrl: "/assets/php-logo-colored.svg",
      name: "php",
    },
    {
      id: 6,
      iconUrl: "/assets/sql-logo-colored.svg",
      name: "sql",
    },
    {
      id: 7,
      iconUrl: "/assets/react-js-logo-colored.svg",
      name: "react js",
    },
    {
      id: 8,
      iconUrl: "/assets/tailwind-css-logo-colored.svg",
      name: "tailwind css",
    },
  ];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skillsetIcons),
  };
};
