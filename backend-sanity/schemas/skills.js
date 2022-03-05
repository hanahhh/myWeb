export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'detail',
            title:'Detail',
            type:'array',
            of: [{type: 'string'}]
        },
    ]
}