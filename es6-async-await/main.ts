function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function performWait(): Promise<void> {
  const message = await waitTwoSeconds();
  console.log(message);
}

performWait();
