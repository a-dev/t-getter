function sumAllArgs(args) {
  return args.reduce((acc, x) => acc + x, 0)
}

export default {
  title: 'Title',
  body: {
    second_level: 'Second level',
    1: {
      text: 'One',
      2: {
        text: 'Two',
        3: {
          text: 'Three'
        }
      }
    }
  },
  digits: {
    one: 1,
    42: 42
  },
  fns: {
    one_arg: (arg) => `One arg - ${arg}`,
    two_arg: (arg1, arg2) => `First arg - ${arg1}, second arg - ${arg2}`,
    any_args: (...args) => `Args sum = ${sumAllArgs(args)}`
  }
}
