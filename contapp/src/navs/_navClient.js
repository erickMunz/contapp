export default {
  items: [
    {
      name: 'APP Contadores chido',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Inicio',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Inicio',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Asignacion',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      name: 'Alta Perfil',
      icon: 'icon-pencil',
      children:[
        {
        name: 'Alta Administrador',
        url: '/altaadmin',
        icon: 'icon-puzzle'
        },
        {
          name: 'Alta Contador',
          url: '/altaconta',
          icon: 'icon-puzzle'
          }
      ]
    }
    
  ],
};
