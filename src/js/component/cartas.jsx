import React from "react";
function MyCard(){    
     return ( <div className="container p-4">

<div class="row text-center">
  <div class="col">
    <div class="card h-100">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgWFRUXFx0aGRgYGBgbFxoXGB0fGSAaHxUdHyggHh0lHh0XITEnJSkrLi4uGB8zODMsNyktLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANRABAAEEAAMFBgUDBQEAAAAAAAECAwQREiExBSJBUZETFGFxocGBsdHh8DI0QiNSYnKCFf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPyab+Rneys5E0RFMTOvOZlPi2Ltjc3sma/n4fVBf7OnIyqrl25PDOuUdZ1Hj9XFiK8a/Xh8czHBxU76x4aBHZxq+0KJyrl6qJmZ4YjpEQmpza6ey5u1f1R3f/AFvX7puyte4Ua8vuz6/7OufD2302CS7iXcSz73TeqmuOdUTPKfOGrRVFdEVU+Mb9UPaGvca/+s/k6w/7Sjf+2PyB1F63N72PF3tb18CLtubvsoq70RvXwVO1afZ005dE96ifWJ8P58XXZdv/AEfeK53VXO5/QFm9X7KzNzXSJlmUYNy7je9VZFXHMcUc+XnENaZ11U+0LOVet6x7sRGucef4/LUAhu5V252dRNFWqq5inf5y4vY89nTTfs3qp5xFUT4xK3h3rM4NN3UUxEePhpX4rnadyNU6txO9z1qmPsCbPi7cyaLFm9NO+KZmPKNOsbFv2bvFdy5qjXSY/dzmYNWVkRXVc1Tw6nXWee/Tp6IbVurAzqbNFczRXE8p8JgGmAAAAAAAAAAAAAAAAAAAAADOu15OJlVV0Wproq103MxPyd4Vu9cyJy8ijh3Gop8oXgGVRVlYMTj28eao3PDMdI35pqMGf/mTjVT3p5zP/Lr+i+Aya68zKtRiV4809Iqq8NR5NWmIpp4Y8HoCjkWrmTm00V0dynn8Kp/n3MK1cxr9Vnhng60z5fD+eS8AjyLUXrFVqfGNM63k5tqzGP7nM1RGoq/x5con+S1XgMrIxb1vBosUUTVz3VEeutpqcrLiNR2fMR8+jQAUcv3ixlRkWaJrp1qaY36xDmxTfysuMi9a4aaYnhieu58WgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhuVXIudyJnURPh5zv8AbQJhX9vVFO5o38Y34an9fQm9ciZibfSN/jrfpvkCwIJvVxVNM0dPH056666+jn2lcWYr4v8AKfPWuf06AsiKi5VVXFM0a5RP4T99ueO5VMRrXemN/CN65a+EAnFXjv8AD3efdjwjlM75/KNdEtu7uZiqefL6xH3kEorxcq9nvi58t8v6fNzNy/z4Y3y5Tr4zz9I/IFoeUzM0xMgPQAAAAAAAAAAAAAAAAAAAAAAANgAAA8iIidxD0AAAAAAAf//Z" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus ullam odio perferendis mollitia eum porro rem architecto impedit! Doloremque alias quae perspiciatis sequi animi accusantium facilis sit eligendi consectetur!</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgWFRUXFx0aGRgYGBgbFxoXGB0fGSAaHxUdHyggHh0lHh0XITEnJSkrLi4uGB8zODMsNyktLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANRABAAEEAAMFBgUDBQEAAAAAAAECAwQREiExBSJBUZETFGFxocGBsdHh8DI0QiNSYnKCFf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPyab+Rneys5E0RFMTOvOZlPi2Ltjc3sma/n4fVBf7OnIyqrl25PDOuUdZ1Hj9XFiK8a/Xh8czHBxU76x4aBHZxq+0KJyrl6qJmZ4YjpEQmpza6ey5u1f1R3f/AFvX7puyte4Ua8vuz6/7OufD2302CS7iXcSz73TeqmuOdUTPKfOGrRVFdEVU+Mb9UPaGvca/+s/k6w/7Sjf+2PyB1F63N72PF3tb18CLtubvsoq70RvXwVO1afZ005dE96ifWJ8P58XXZdv/AEfeK53VXO5/QFm9X7KzNzXSJlmUYNy7je9VZFXHMcUc+XnENaZ11U+0LOVet6x7sRGucef4/LUAhu5V252dRNFWqq5inf5y4vY89nTTfs3qp5xFUT4xK3h3rM4NN3UUxEePhpX4rnadyNU6txO9z1qmPsCbPi7cyaLFm9NO+KZmPKNOsbFv2bvFdy5qjXSY/dzmYNWVkRXVc1Tw6nXWee/Tp6IbVurAzqbNFczRXE8p8JgGmAAAAAAAAAAAAAAAAAAAAADOu15OJlVV0Wproq103MxPyd4Vu9cyJy8ijh3Gop8oXgGVRVlYMTj28eao3PDMdI35pqMGf/mTjVT3p5zP/Lr+i+Aya68zKtRiV4809Iqq8NR5NWmIpp4Y8HoCjkWrmTm00V0dynn8Kp/n3MK1cxr9Vnhng60z5fD+eS8AjyLUXrFVqfGNM63k5tqzGP7nM1RGoq/x5con+S1XgMrIxb1vBosUUTVz3VEeutpqcrLiNR2fMR8+jQAUcv3ixlRkWaJrp1qaY36xDmxTfysuMi9a4aaYnhieu58WgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhuVXIudyJnURPh5zv8AbQJhX9vVFO5o38Y34an9fQm9ciZibfSN/jrfpvkCwIJvVxVNM0dPH056666+jn2lcWYr4v8AKfPWuf06AsiKi5VVXFM0a5RP4T99ueO5VMRrXemN/CN65a+EAnFXjv8AD3efdjwjlM75/KNdEtu7uZiqefL6xH3kEorxcq9nvi58t8v6fNzNy/z4Y3y5Tr4zz9I/IFoeUzM0xMgPQAAAAAAAAAAAAAAAAAAAAAAANgAAA8iIidxD0AAAAAAAf//Z" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident non alias vero tenetur nulla pariatur modi officia quod fugit, aspernatur voluptates, necessitatibus nostrum. Illum, praesentium possimus sit quis ea omnis?</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgWFRUXFx0aGRgYGBgbFxoXGB0fGSAaHxUdHyggHh0lHh0XITEnJSkrLi4uGB8zODMsNyktLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANRABAAEEAAMFBgUDBQEAAAAAAAECAwQREiExBSJBUZETFGFxocGBsdHh8DI0QiNSYnKCFf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPyab+Rneys5E0RFMTOvOZlPi2Ltjc3sma/n4fVBf7OnIyqrl25PDOuUdZ1Hj9XFiK8a/Xh8czHBxU76x4aBHZxq+0KJyrl6qJmZ4YjpEQmpza6ey5u1f1R3f/AFvX7puyte4Ua8vuz6/7OufD2302CS7iXcSz73TeqmuOdUTPKfOGrRVFdEVU+Mb9UPaGvca/+s/k6w/7Sjf+2PyB1F63N72PF3tb18CLtubvsoq70RvXwVO1afZ005dE96ifWJ8P58XXZdv/AEfeK53VXO5/QFm9X7KzNzXSJlmUYNy7je9VZFXHMcUc+XnENaZ11U+0LOVet6x7sRGucef4/LUAhu5V252dRNFWqq5inf5y4vY89nTTfs3qp5xFUT4xK3h3rM4NN3UUxEePhpX4rnadyNU6txO9z1qmPsCbPi7cyaLFm9NO+KZmPKNOsbFv2bvFdy5qjXSY/dzmYNWVkRXVc1Tw6nXWee/Tp6IbVurAzqbNFczRXE8p8JgGmAAAAAAAAAAAAAAAAAAAAADOu15OJlVV0Wproq103MxPyd4Vu9cyJy8ijh3Gop8oXgGVRVlYMTj28eao3PDMdI35pqMGf/mTjVT3p5zP/Lr+i+Aya68zKtRiV4809Iqq8NR5NWmIpp4Y8HoCjkWrmTm00V0dynn8Kp/n3MK1cxr9Vnhng60z5fD+eS8AjyLUXrFVqfGNM63k5tqzGP7nM1RGoq/x5con+S1XgMrIxb1vBosUUTVz3VEeutpqcrLiNR2fMR8+jQAUcv3ixlRkWaJrp1qaY36xDmxTfysuMi9a4aaYnhieu58WgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhuVXIudyJnURPh5zv8AbQJhX9vVFO5o38Y34an9fQm9ciZibfSN/jrfpvkCwIJvVxVNM0dPH056666+jn2lcWYr4v8AKfPWuf06AsiKi5VVXFM0a5RP4T99ueO5VMRrXemN/CN65a+EAnFXjv8AD3efdjwjlM75/KNdEtu7uZiqefL6xH3kEorxcq9nvi58t8v6fNzNy/z4Y3y5Tr4zz9I/IFoeUzM0xMgPQAAAAAAAAAAAAAAAAAAAAAAANgAAA8iIidxD0AAAAAAAf//Z" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique vero, labore temporibus repellendus necessitatibus eos, cupiditate doloribus sunt asperiores facilis beatae sed, velit blanditiis nesciunt qui modi. Exercitationem, totam est?</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgWFRUXFx0aGRgYGBgbFxoXGB0fGSAaHxUdHyggHh0lHh0XITEnJSkrLi4uGB8zODMsNyktLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANRABAAEEAAMFBgUDBQEAAAAAAAECAwQREiExBSJBUZETFGFxocGBsdHh8DI0QiNSYnKCFf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPyab+Rneys5E0RFMTOvOZlPi2Ltjc3sma/n4fVBf7OnIyqrl25PDOuUdZ1Hj9XFiK8a/Xh8czHBxU76x4aBHZxq+0KJyrl6qJmZ4YjpEQmpza6ey5u1f1R3f/AFvX7puyte4Ua8vuz6/7OufD2302CS7iXcSz73TeqmuOdUTPKfOGrRVFdEVU+Mb9UPaGvca/+s/k6w/7Sjf+2PyB1F63N72PF3tb18CLtubvsoq70RvXwVO1afZ005dE96ifWJ8P58XXZdv/AEfeK53VXO5/QFm9X7KzNzXSJlmUYNy7je9VZFXHMcUc+XnENaZ11U+0LOVet6x7sRGucef4/LUAhu5V252dRNFWqq5inf5y4vY89nTTfs3qp5xFUT4xK3h3rM4NN3UUxEePhpX4rnadyNU6txO9z1qmPsCbPi7cyaLFm9NO+KZmPKNOsbFv2bvFdy5qjXSY/dzmYNWVkRXVc1Tw6nXWee/Tp6IbVurAzqbNFczRXE8p8JgGmAAAAAAAAAAAAAAAAAAAAADOu15OJlVV0Wproq103MxPyd4Vu9cyJy8ijh3Gop8oXgGVRVlYMTj28eao3PDMdI35pqMGf/mTjVT3p5zP/Lr+i+Aya68zKtRiV4809Iqq8NR5NWmIpp4Y8HoCjkWrmTm00V0dynn8Kp/n3MK1cxr9Vnhng60z5fD+eS8AjyLUXrFVqfGNM63k5tqzGP7nM1RGoq/x5con+S1XgMrIxb1vBosUUTVz3VEeutpqcrLiNR2fMR8+jQAUcv3ixlRkWaJrp1qaY36xDmxTfysuMi9a4aaYnhieu58WgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhuVXIudyJnURPh5zv8AbQJhX9vVFO5o38Y34an9fQm9ciZibfSN/jrfpvkCwIJvVxVNM0dPH056666+jn2lcWYr4v8AKfPWuf06AsiKi5VVXFM0a5RP4T99ueO5VMRrXemN/CN65a+EAnFXjv8AD3efdjwjlM75/KNdEtu7uZiqefL6xH3kEorxcq9nvi58t8v6fNzNy/z4Y3y5Tr4zz9I/IFoeUzM0xMgPQAAAAAAAAAAAAAAAAAAAAAAANgAAA8iIidxD0AAAAAAAf//Z" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique officia pariatur autem adipisci numquam. Quidem fugiat debitis, aliquam odit deleniti odio natus iusto voluptatum incidunt quia praesentium atque dolore beatae.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
     </div>    
            );         
        }         
        export default MyCard;