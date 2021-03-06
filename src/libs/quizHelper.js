const getBlankQuest = currentCategory => ({
  subject: '',
  category: currentCategory,
  question: '',
  choice_0: '',
  choice_1: '',
  choice_2: '',
  open: true
})

const getQuestFromProps = quest => {
  if (quest === undefined) return {}
  const { subject, category, question, choices } = quest
  return {
    subject,
    category,
    question,
    choice_0: choices[0],
    choice_1: choices[1],
    choice_2: choices[2]
  }
}

const getQuizStatefromQuest = ({
  subject = '',
  category = '',
  question = '',
  choice_0 = '',
  choice_1 = '',
  choice_2 = ''
}) => ({
  subject,
  category,
  question,
  choice_0,
  choice_1,
  choice_2,
  isEditing: {
    subject: false,
    category: false,
    question: false,
    choice_0: false,
    choice_1: false,
    choice_2: false
  },
  open: false
})

const getFloatingLabelText = form => {
  switch (form) {
    case 'subject':
      return 'Subject'
    case 'category':
      return 'Category'
    case 'question':
      return 'Question'
    case 'choice_0':
      return 'Choice 1 (correct answer)'
    case 'choice_1':
      return 'Choice 2'
    case 'choice_2':
      return 'Choice 3'
    default:
      return form
  }
}

export {
  getBlankQuest,
  getQuestFromProps,
  getQuizStatefromQuest,
  getFloatingLabelText
}
