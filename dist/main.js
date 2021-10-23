/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/form-validation.js":
/*!****************************************!*\
  !*** ./src/modules/form-validation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formLogic = (() => {
  const formInputFactory = (elemIdName, labelClassName) => {
    const elem = document.getElementById(elemIdName);
    const label = document.getElementById(labelClassName);
    const elemText = elemIdName;
    return { elem, label };
  };

  function updateErrorMessage(inputArr, count) {
    const errorMessage = document.querySelector('.error-message');
    inputArr.forEach((input) => {
      if (input.elem.validity.valid) {
        count += 1;
      } else {
        count -= 1;
      }
    });

    const numOfInputs = inputArr.length;
    if (count === numOfInputs) {
      errorMessage.innerHTML = 'You are ready to Submit!';
      errorMessage.style.color = '#23C552';
    }
    count = 0;
  }

  function resetForm(inputArr) {
    form.reset();
    const errorMessage = document.querySelector('.error-message');
    inputArr.forEach((input) => {
      input.label.style.color = '#6f6f6f';
      input.elem.removeEventListener('input', () => updateInputs());
    });
    errorMessage.style.opacity = 0;
    errorMessage.innerHTML = 'Please correct the above fields.';
    errorMessage.style.color = '#ff4545';
  }

  function checkFormCompletion(inputArr, count) {
    inputArr.forEach((userInput) => {
      if (userInput.elem.validity.valid) {
        count += 1;
      } else {
        count -= 1;
      }
    });

    const numOfInputs = inputArr.length;
    if (count === numOfInputs) {
      return true;
    }
    return false;
  }

  function updateInputs(userInput, inputArr, count) {
    const errorMessage = document.querySelector('.error-message');
    if (userInput.elem.validity.typeMismatch) {
      userInput.label.style.color = '#ff4545';
      errorMessage.style.opacity = '1';
    } else {
      userInput.label.style.color = '#6f6f6f';
      updateErrorMessage(inputArr, count);
    }
  }

  function submitForm() {
    const submitPopup = document.querySelector('.submit-popup-card');
    submitPopup.style.pointerEvents = 'auto';
    submitPopup.classList.add('open-card');
    const popupTimeOut = setTimeout(() => {
      submitPopup.style.pointerEvents = 'none';
      submitPopup.classList.remove('open-card');
      clearTimeout(popupTimeOut);
    }, 5000);
  }

  function checkInputs() {
    const userEmail = formInputFactory('email', 'email-label');
    const userName = formInputFactory('name', 'name-label');
    const userCountry = formInputFactory('country', 'country-label');
    const userZip = formInputFactory('zip', 'zip-label');
    const userPass = formInputFactory('password', 'pass-label');
    const userPassConf = formInputFactory('password-conf', 'pass-conf-label');
    const errorMessage = document.querySelector('.error-message');
    let count = 0;

    const inputArr = [
      userName,
      userEmail,
      userCountry,
      userZip,
      userPass,
      userPassConf,
    ];

    let formCompleted = checkFormCompletion(inputArr, count);
    if (formCompleted === true) {
      resetForm(inputArr);
      submitForm();
    } else {
      inputArr.forEach((userInput) => {
        if (!userInput.elem.validity.valid) {
          userInput.label.style.color = '#ff4545';
          errorMessage.style.opacity = '1';
        }

        userInput.elem.addEventListener('input', () =>
          updateInputs(userInput, inputArr, count)
        );
      });
    }
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    checkInputs();
    event.preventDefault();
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formLogic);


/***/ }),

/***/ "./src/modules/ham-btn.js":
/*!********************************!*\
  !*** ./src/modules/ham-btn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hamBtnLogic = (() => {
  const hamBtn = document.querySelector('.nav-icon4');

  function toggleHamBtn() {
    hamBtn.classList.toggle('open');
  }

  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');
  });

  return {
    toggleHamBtn,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamBtnLogic);


/***/ }),

/***/ "./src/modules/vertical-dd.js":
/*!************************************!*\
  !*** ./src/modules/vertical-dd.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ddLogic = (() => {
  const hamBtn = document.querySelector('.nav-icon4');
  const ddMenu = document.querySelector('.dd-menu');

  function toggleDDMenu() {
    ddMenu.classList.toggle('open-dd');
  }

  hamBtn.addEventListener('click', () => {
    ddMenu.classList.toggle('open-dd');
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ddLogic);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_ham_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ham-btn */ "./src/modules/ham-btn.js");
/* harmony import */ var _modules_vertical_dd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/vertical-dd */ "./src/modules/vertical-dd.js");
/* harmony import */ var _modules_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form-validation */ "./src/modules/form-validation.js");






})();

/******/ })()
;
//# sourceMappingURL=main.js.map