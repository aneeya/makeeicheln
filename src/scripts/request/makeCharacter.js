export default async function submitNewCharacter(e) {
  e.preventDefault()
  const dataForm = new FormData(e.target).entries()
  const submitData = {}
  const accessoryItems = []
  
  for(const data of dataForm) {
    if(data[0] === 'accessories') {
      accessoryItems.push(data[1])
    } else {
      submitData[data[0]] = data[1]
    }
    submitData[data[0]] = data[1]
  }

  submitData['accessories'] = accessoryItems

  try{
    const response = await fetch('/makecharacter', {
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.ok) {
      window.location.replace('/')
    }
  
  } catch {
    alert('서버요청에 실패했습니다')
  }
  
}

