export default{
    name:'portfolio',
    title:'Portfolio',
    type: 'document',
    fields:[
        {
            name:'projectName',
            title:'ProjectName',
            type:'string'
        },
        {
            name:'brief',
            title:'Brief',
            type: 'string',
        },
        {
            name:'language',
            title:'Language',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'string',
        },
        {
            name:'github',
            title:'Github',
            type:'string',
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        }
    ]
}