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
            {
                type: 'input',
                name: 'name',
                message: 'Enter the component name'
            },
            {
                type: 'list',
                choices: Object.values(ComponentType),
                name: 'componentType',
                message: 'Enter the type of the component',
              },
        ],
        actions: [
            {
              type: 'addMany',
              destination: 'src/ui/{{componentFolder componentType}}/{{name}}',
              base: 'plop-templates/component',
              templateFiles: 'plop-templates/component/*.hbs',
            },
          ],
    })
    plop.setHelper('componentFolder', componentType => ComponentFolder[componentType])
  
    // prettier-ignore
    plop.setHelper(
      'storyPath',
      componentType => StoryPath[componentType]
    )
}