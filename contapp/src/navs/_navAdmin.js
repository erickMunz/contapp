export default {
    items: [
      {
        name: 'ADMINISTRADORES',
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
        url: '/asignaciones',
        icon: 'icon-pencil',
      },
      {
        name: 'Altas',
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
            },{
          name: 'Alta Contabilidad',
          url: '/altaadmin',
          icon: 'icon-puzzle'
          },
          {
            name: 'Alta Cliente',
            url: '/altaconta',
            icon: 'icon-puzzle'
            }
        ]
      }
      
    ],
  };
  