// plop se define como un micro-generator framework
const ComponentType = {
  ATOMS: 'atoms',
  MOLECULES: 'molecules',
  FOUNDATIONS: 'foundations'
}

const ComponentFolder = {
    [ComponentType.ATOMS]: 'atoms',
    [ComponentType.MOLECULES]: 'molecules',
    [ComponentType.FOUNDATIONS]: 'foundations',
}

const StoryPath = {
    [ComponentType.ATOMS]: 'Atoms',
    [ComponentType.MOLECULES]: 'Molecules',
    [ComponentType.FOUNDATIONS]: 'Foundations'
}

export default (plop) => {
    plop.setGenerator('component', {
        description: 'Create new UI component',
        prompts: [
            { // le preguntamos al usuario el nombre
                type: 'input',
                name: 'name',
                message: 'Enter the component name'
            }, // le preguntamos al usuario que tipo de componente es
            {
                type: 'list',
                choices: Object.values(ComponentType),
                name: 'ComponentType',
                message: 'Enter the type of the component',
              },
        ],
        actions: [
            {
              // addMany me deja hacer muchas acciones de una 
              // https://plopjs.com/documentation/#addmany
              type: 'addMany',
              destination: 'src/ui/{{ComponentFolder ComponentType}}/{{name}}',
              base: 'plop-templates/component',
              templateFiles: 'plop-templates/component/*.hbs',
            },
          ],
    })
    plop.setHelper('ComponentFolder', componentType => ComponentFolder[componentType])
  
    // prettier-ignore
    plop.setHelper(
      'storyPath',
      componentType => StoryPath[componentType]
    )
}