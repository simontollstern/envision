---
title: Feed
---

## Simple post with embedded attachment

```html
<article class="env-post">
   <header class="env-post__header env-media">
      <div class="env-media__figure">
         <a href="#">
            <img
               class="env-profile-image env-profile-image--x-small"
               src="https://envisionui.io/placeholders/text/xs.png"
               alt="Example profile image"
            />
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#" class="env-link-secondary">Erik</a>
            <small>16:34</small>
         </h3>
         <p class="env-text">Design</p>
      </div>
      <div class="env-media__actions">
         <button
            type="button"
            class="env-button env-button--icon"
            aria-haspopup="true"
            title="More options"
         >
            <svg class="env-icon">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
               ></use>
            </svg>
            <span class="env-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="env-post__entry">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <div class="env-post__attachment">
      <div class="env-embedded">
         <img
            class="env-embedded__img"
            alt="Image alternative"
            src="https://envisionui.io/placeholders/text/embedded-image.png"
         />
         <div class="env-embedded__block">
            <h4 class="env-embedded__title env-text">Lorem ipsum</h4>
            <p class="env-embedded__text env-text">
               Bacon ipsum dolor amet beef cupim brisket pork turducken salami
               pig drumstick chuck ball tip biltong shoulder.
            </p>
         </div>
      </div>
   </div>
   <footer class="env-post__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <button class="env-button env-button--small env-link">
               Like (0)
            </button>
         </li>
         <li class="env-list__item">
            <button class="env-button env-button--small env-link">Share</button>
         </li>
         <li class="env-list__item">
            <button
               class="env-button env-button--small env-link"
               data-env-collapse
               aria-expanded="false"
               data-target="#comments"
               aria-controls="comments"
            >
               Comment (0)
            </button>
         </li>
      </ul>
   </footer>
   <div class="env-comments env-collapse" id="comments">
      <div class="env-comments__wrapper">
         <ul class="env-comments__list env-list"></ul>
         <div class="env-comments__comment env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--xx-small"
                     src="https://envisionui.io/placeholders/text/xxs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <label class="env-assistive-text" for="#example-input1"
                  >Example input</label
               >
               <input type="text" id="example-input1" class="env-form-input" />
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--primary">
                  Comment
               </button>
            </div>
         </div>
      </div>
   </div>
</article>
```

## Comment

```html
<article class="env-comment env-media">
   <div class="env-media__figure">
      <a href="#">
         <img
            class="env-profile-image env-profile-image--x-small"
            src="https://envisionui.io/placeholders/text/xs.png"
            alt="Example profile image"
         />
      </a>
   </div>
   <div class="env-media__body">
      <header class="env-comment__header">
         <h3 class="env-text">
            <a href="#" class="env-link-secondary">Emma</a>
         </h3>
      </header>
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et Lorem ipsum dolor sit amet
      </p>
      <footer class="env-comment__footer">
         <ul class="env-list env-list--horizontal env-list-dividers--left">
            <li class="env-list__item">
               <button class="env-button env-button--small env-link">
                  Like (0)
               </button>
            </li>
            <li class="env-list__item">
               <small>09:30</small>
            </li>
         </ul>
      </footer>
   </div>
   <div class="env-media__actions">
      <button
         type="button"
         class="env-button env-button--icon"
         aria-haspopup="true"
         title="More options"
      >
         <svg class="env-icon">
            <use
               xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
            ></use>
         </svg>
         <span class="env-assistive-text">More options</span>
      </button>
   </div>
</article>
```

## Post with comments

```html
<article class="env-post">
   <header class="env-post__header env-media">
      <div class="env-media__figure">
         <a href="#">
            <img
               class="env-profile-image env-profile-image--x-small"
               src="https://envisionui.io/placeholders/text/xs.png"
               alt="Example profile image"
            />
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#" class="env-link-secondary">Erik</a>
            <small>16:34</small>
         </h3>
         <p class="env-text">Design</p>
      </div>
      <div class="env-media__actions">
         <button
            type="button"
            class="env-button env-button--icon"
            aria-haspopup="true"
            title="More options"
         >
            <svg class="env-icon">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
               ></use>
            </svg>
            <span class="env-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="env-post__entry">
      <p class="env-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
         lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed
         purus quam. Proin eu tincidunt metus.
      </p>
   </div>
   <footer class="env-post__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <button class="env-button env-button--small env-link">
               Like (0)
            </button>
         </li>
         <li class="env-list__item">
            <button class="env-button env-button--small env-link">Share</button>
         </li>
         <li class="env-list__item">
            <button
               class="env-button env-button--small env-link"
               data-env-collapse
               aria-expanded="true"
               data-target="#comments2"
               aria-controls="comments2"
            >
               Comment (3)
            </button>
         </li>
      </ul>
   </footer>
   <div class="env-comments env-collapse env-collapse--show" id="comments2">
      <div class="env-comments__wrapper">
         <ul class="env-comments__list env-list">
            <li>
               <article class="env-comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img
                           class="env-profile-image env-profile-image--x-small"
                           src="https://envisionui.io/placeholders/text/xs.png"
                           alt="Example profile image"
                        />
                     </a>
                  </div>
                  <div class="env-media__body">
                     <header class="env-comment__header">
                        <h4 class="env-text">
                           <a href="#" class="env-link-secondary">Malin</a>
                        </h4>
                     </header>
                     <p class="env-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et Lorem
                        ipsum dolor sit amet
                     </p>
                     <footer class="env-comment__footer">
                        <ul
                           class="env-list env-list--horizontal env-list-dividers--left"
                        >
                           <li class="env-list__item">
                              <button
                                 class="env-button env-button--small env-link"
                              >
                                 Like (0)
                              </button>
                           </li>
                           <li class="env-list__item">
                              <small class="env-text">10:27</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="env-media__actions">
                     <button
                        type="button"
                        class="env-button env-button--icon"
                        aria-haspopup="true"
                        title="More options"
                     >
                        <svg class="env-icon">
                           <use
                              xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                           ></use>
                        </svg>
                        <span class="env-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
            <li>
               <article class="env-comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img
                           class="env-profile-image env-profile-image--x-small"
                           src="https://envisionui.io/placeholders/text/xs.png"
                           alt="Example profile image"
                        />
                     </a>
                  </div>
                  <div class="env-media__body">
                     <header class="env-comment__header">
                        <h4 class="env-text">
                           <a href="#" class="env-link-secondary">Robin</a>
                        </h4>
                     </header>
                     <p class="env-text">
                        Aenean aliquet sem eget velit tincidunt ullamcorper.
                        Donec aliquet, quam vitae cursus aliquet, lorem nunc
                        efficitur nulla, ullamcorper placerat dui massa at eros.
                     </p>
                     <footer class="env-comment__footer">
                        <ul
                           class="env-list env-list--horizontal env-list-dividers--left"
                        >
                           <li class="env-list__item">
                              <button
                                 class="env-button env-button--small env-link"
                              >
                                 Like (0)
                              </button>
                           </li>
                           <li class="env-list__item">
                              <small class="env-text">15:25</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="env-media__actions">
                     <button
                        type="button"
                        class="env-button env-button--icon"
                        aria-haspopup="true"
                        title="More options"
                     >
                        <svg class="env-icon">
                           <use
                              xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                           ></use>
                        </svg>
                        <span class="env-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
            <li>
               <article class="env-comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img
                           class="env-profile-image env-profile-image--x-small"
                           src="https://envisionui.io/placeholders/text/xs.png"
                           alt="Example profile image"
                        />
                     </a>
                  </div>
                  <div class="env-media__body">
                     <header class="env-comment__header">
                        <h4 class="env-text">
                           <a href="#" class="env-link-secondary">Anders</a>
                        </h4>
                     </header>
                     <p class="env-text">
                        Aenean aliquet sem eget velit tincidunt ullamcorper.
                        Donec aliquet, quam vitae cursus aliquet, lorem nunc
                        efficitur nulla, ullamcorper placerat dui massa at eros.
                     </p>
                     <footer class="env-comment__footer">
                        <ul
                           class="env-list env-list--horizontal env-list-dividers--left"
                        >
                           <li class="env-list__item">
                              <button
                                 class="env-button env-button--small env-link"
                              >
                                 Like (0)
                              </button>
                           </li>
                           <li class="env-list__item">
                              <small class="env-text">17:39</small>
                           </li>
                        </ul>
                     </footer>
                  </div>
                  <div class="env-media__actions">
                     <button
                        type="button"
                        class="env-button env-button--icon"
                        aria-haspopup="true"
                        title="More options"
                     >
                        <svg class="env-icon">
                           <use
                              xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                           ></use>
                        </svg>
                        <span class="env-assistive-text">More options</span>
                     </button>
                  </div>
               </article>
            </li>
         </ul>
         <div class="env-comments__comment env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--xx-small"
                     src="https://envisionui.io/placeholders/text/xxs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <label for="example-input2" class="env-assistive-text"
                  >Example input</label
               >
               <input type="text" id="example-input2" class="env-form-input" />
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--primary">
                  Comment
               </button>
            </div>
         </div>
      </div>
   </div>
</article>
```

## Shared post

```html
<article class="env-post">
   <header class="env-post__header env-media">
      <div class="env-media__figure">
         <a href="#">
            <img
               class="env-profile-image env-profile-image--x-small"
               src="https://envisionui.io/placeholders/text/xs.png"
               alt="Example profile image"
            />
         </a>
      </div>
      <div class="env-media__body">
         <h3 class="env-text">
            <a href="#" class="env-link-secondary">Erik</a>
            <small>shared</small>
            <a href="#" class="env-link-secondary">Malin's</a>
            <small>post</small>
            <small>16:34</small>
         </h3>
         <p class="env-text">Design</p>
      </div>
      <div class="env-media__actions">
         <button
            type="button"
            class="env-button env-button--icon"
            aria-haspopup="true"
            title="More options"
         >
            <svg class="env-icon">
               <use
                  xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
               ></use>
            </svg>
            <span class="env-assistive-text">More options</span>
         </button>
      </div>
   </header>
   <div class="env-post__entry">
      <p class="env-text">Lorem ipsum dolor sit amet</p>
   </div>
   <div class="env-post__shared">
      <blockquote class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--x-small"
                     src="https://envisionui.io/placeholders/text/xs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#" class="env-link-secondary">Malin</a>
                  <small>17:29</small>
               </h3>
               <p class="env-text">Design</p>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
               eget lobortis dui, in accumsan augue. Quisque nec augue quam.
               Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
      </blockquote>
   </div>
   <footer class="env-post__footer">
      <ul class="env-list env-list--horizontal env-list-dividers--left">
         <li class="env-list__item">
            <button class="env-button env-button--small env-link">
               Like (0)
            </button>
         </li>
         <li class="env-list__item">
            <button class="env-button env-button--small env-link">Share</button>
         </li>
         <li class="env-list__item">
            <button
               class="env-button env-button--small env-link"
               data-env-collapse
               aria-expanded="false"
               data-target="#comments3"
               aria-controls="comments3"
            >
               Comment (0)
            </button>
         </li>
      </ul>
   </footer>
   <div class="env-comments env-collapse" id="comments3">
      <div class="env-comments__wrapper">
         <ul class="env-comments__list env-list"></ul>
         <div class="env-comments__comment env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--xx-small"
                     src="https://envisionui.io/placeholders/text/xxs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <label class="env-assistive-text" for="#example-input3"
                  >Example input</label
               >
               <input type="text" id="example-input3" class="env-form-input" />
            </div>
            <div class="env-media__actions">
               <button type="button" class="env-button env-button--primary">
                  Comment
               </button>
            </div>
         </div>
      </div>
   </div>
</article>
```

## Feed list

```html
<ul class="env-feed env-list">
   <li class="env-feed__item">
      <article class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--x-small"
                     src="https://envisionui.io/placeholders/text/xs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#" class="env-link-secondary">Erik</a>
                  <small>16:34</small>
               </h3>
               <p class="env-text">Design</p>
            </div>
            <div class="env-media__actions">
               <button
                  type="button"
                  class="env-button env-button--icon"
                  aria-haspopup="true"
                  title="More options"
               >
                  <svg class="env-icon">
                     <use
                        xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                     ></use>
                  </svg>
                  <span class="env-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
               eget lobortis dui, in accumsan augue. Quisque nec augue quam.
               Donec sed purus quam. Proin eu tincidunt metus.
            </p>
         </div>
         <footer class="env-post__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <button class="env-button env-button--small env-link">
                     Like (0)
                  </button>
               </li>
               <li class="env-list__item">
                  <button class="env-button env-button--small env-link">
                     Share
                  </button>
               </li>
               <li class="env-list__item">
                  <button
                     class="env-button env-button--small env-link"
                     data-env-collapse
                     aria-expanded="false"
                     data-target="#comments4"
                     aria-controls="comments4"
                  >
                     Comment (2)
                  </button>
               </li>
            </ul>
         </footer>
         <div
            class="env-comments env-collapse env-collapse--show"
            id="comments4"
         >
            <div class="env-comments__wrapper">
               <ul class="env-comments__list env-list">
                  <li>
                     <article class="env-comment env-media">
                        <div class="env-media__figure">
                           <a href="#">
                              <img
                                 class="env-profile-image env-profile-image--x-small"
                                 src="https://envisionui.io/placeholders/text/xs.png"
                                 alt="Example profile image"
                              />
                           </a>
                        </div>
                        <div class="env-media__body">
                           <header class="env-comment__header">
                              <h4 class="env-text">
                                 <a href="#" class="env-link-secondary"
                                    >Anders</a
                                 >
                              </h4>
                           </header>
                           <p class="env-text">
                              Aenean aliquet sem eget velit tincidunt
                              ullamcorper. Donec aliquet, quam vitae cursus
                              aliquet, lorem nunc efficitur nulla, ullamcorper
                              placerat dui massa at eros.
                           </p>
                           <footer class="env-comment__footer">
                              <ul
                                 class="env-list env-list--horizontal env-list-dividers--left"
                              >
                                 <li class="env-list__item">
                                    <button
                                       class="env-button env-button--small env-link"
                                    >
                                       Like (0)
                                    </button>
                                 </li>
                                 <li class="env-list__item">
                                    <small class="env-text">17:39</small>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                        <div class="env-media__actions">
                           <button
                              type="button"
                              class="env-button env-button--icon"
                              aria-haspopup="true"
                              title="More options"
                           >
                              <svg class="env-icon">
                                 <use
                                    xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                                 ></use>
                              </svg>
                              <span class="env-assistive-text"
                                 >More options</span
                              >
                           </button>
                        </div>
                     </article>
                  </li>
                  <li>
                     <article class="env-comment env-media">
                        <div class="env-media__figure">
                           <a href="#">
                              <img
                                 class="env-profile-image env-profile-image--x-small"
                                 src="https://envisionui.io/placeholders/text/xs.png"
                                 alt="Example profile image"
                              />
                           </a>
                        </div>
                        <div class="env-media__body">
                           <header class="env-comment__header">
                              <h4 class="env-text">
                                 <a href="#" class="env-link-secondary">Emma</a>
                              </h4>
                           </header>
                           <p class="env-text">
                              Aenean aliquet sem eget velit tincidunt
                              ullamcorper. Donec aliquet, quam vitae cursus
                              aliquet, lorem nunc efficitur nulla, ullamcorper
                              placerat dui massa at eros.
                           </p>
                           <footer class="env-comment__footer">
                              <ul
                                 class="env-list env-list--horizontal env-list-dividers--left"
                              >
                                 <li class="env-list__item">
                                    <button
                                       class="env-button env-button--small env-link"
                                    >
                                       Like (0)
                                    </button>
                                 </li>
                                 <li class="env-list__item">
                                    <small class="env-text">19:24</small>
                                 </li>
                              </ul>
                           </footer>
                        </div>
                        <div class="env-media__actions">
                           <button
                              type="button"
                              class="env-button env-button--icon"
                              aria-haspopup="true"
                              title="More options"
                           >
                              <svg class="env-icon">
                                 <use
                                    xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                                 ></use>
                              </svg>
                              <span class="env-assistive-text"
                                 >More options</span
                              >
                           </button>
                        </div>
                     </article>
                  </li>
               </ul>
               <div class="env-comments__comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img
                           class="env-profile-image env-profile-image--xx-small"
                           src="https://envisionui.io/placeholders/text/xxs.png"
                           alt="Example profile image"
                        />
                     </a>
                  </div>
                  <div class="env-media__body">
                     <label for="example-input4" class="env-assistive-text"
                        >Example input</label
                     >
                     <input
                        type="text"
                        id="example-input4"
                        class="env-form-input"
                     />
                  </div>
                  <div class="env-media__actions">
                     <button
                        type="button"
                        class="env-button env-button--primary"
                     >
                        Comment
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="env-feed__item">
      <article class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--x-small"
                     src="https://envisionui.io/placeholders/text/xs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#" class="env-link-secondary">Robin</a>
                  <small class="env-text">17:28</small>
               </h3>
               <p class="env-text">Design</p>
            </div>
            <div class="env-media__actions">
               <button
                  type="button"
                  class="env-button env-button--icon"
                  aria-haspopup="true"
                  title="More options"
               >
                  <svg class="env-icon">
                     <use
                        xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                     ></use>
                  </svg>
                  <span class="env-assistive-text">More options</span>
               </button>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Duis eget eros urna. Maecenas rutrum tortor eget elit mattis,
               pretium aliquet sapien accumsan. Nunc congue vehicula mi sit amet
               dictum. Aenean aliquam ex lorem, sit amet laoreet justo ultrices
               quis.
            </p>
         </div>
         <footer class="env-post__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <button class="env-button env-button--small env-link">
                     Like (0)
                  </button>
               </li>
               <li class="env-list__item">
                  <button class="env-button env-button--small env-link">
                     Share
                  </button>
               </li>
               <li class="env-list__item">
                  <button
                     class="env-button env-button--small env-link"
                     data-env-collapse
                     aria-expanded="false"
                     data-target="#comments5"
                     aria-controls="comments5"
                  >
                     Comment (0)
                  </button>
               </li>
            </ul>
         </footer>
         <div class="env-comments env-collapse" id="comments5">
            <div class="env-comments__wrapper">
               <ul class="env-comments__list env-list"></ul>
               <div class="env-comments__comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img
                           class="env-profile-image env-profile-image--xx-small"
                           src="https://envisionui.io/placeholders/text/xxs.png"
                           alt="Example profile image"
                        />
                     </a>
                  </div>
                  <div class="env-media__body">
                     <label class="env-assistive-text" for="#example-input5"
                        >Example input</label
                     >
                     <input
                        type="text"
                        id="example-input5"
                        class="env-form-input"
                     />
                  </div>
                  <div class="env-media__actions">
                     <button
                        type="button"
                        class="env-button env-button--primary"
                     >
                        Comment
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
   <li class="env-feed__item">
      <article class="env-post">
         <header class="env-post__header env-media">
            <div class="env-media__figure">
               <a href="#">
                  <img
                     class="env-profile-image env-profile-image--x-small"
                     src="https://envisionui.io/placeholders/text/xs.png"
                     alt="Example profile image"
                  />
               </a>
            </div>
            <div class="env-media__body">
               <h3 class="env-text">
                  <a href="#" class="env-link-secondary">Ebba</a>
                  <small class="env-text">19:05</small>
               </h3>
               <p class="env-text">Design</p>
            </div>
            <div class="env-media__actions">
               <button
                  type="button"
                  class="env-button env-button--icon"
                  aria-haspopup="true"
                  title="More options"
               >
                  <svg class="env-icon">
                     <use
                        xlink:href="/sitevision/envision-icons.svg#icon-arrow-down"
                     ></use>
                  </svg>
                  <span class="env-assistive-text">More post options</span>
               </button>
            </div>
         </header>
         <div class="env-post__entry">
            <p class="env-text">
               Nulla faucibus ultrices ullamcorper. Duis gravida malesuada
               commodo. Praesent ornare id nisl non suscipit.
            </p>
         </div>
         <footer class="env-post__footer">
            <ul class="env-list env-list--horizontal env-list-dividers--left">
               <li class="env-list__item">
                  <button class="env-button env-button--small env-link">
                     Like (0)
                  </button>
               </li>
               <li class="env-list__item">
                  <button class="env-button env-button--small env-link">
                     Share
                  </button>
               </li>
               <li class="env-list__item">
                  <button
                     class="env-button env-button--small env-link"
                     data-env-collapse
                     aria-expanded="false"
                     data-target="#comments6"
                     aria-controls="comments6"
                  >
                     Comment (0)
                  </button>
               </li>
            </ul>
         </footer>
         <div class="env-comments env-collapse" id="comments6">
            <div class="env-comments__wrapper">
               <ul class="env-comments__list env-list"></ul>
               <div class="env-comments__comment env-media">
                  <div class="env-media__figure">
                     <a href="#">
                        <img
                           class="env-profile-image env-profile-image--xx-small"
                           src="https://envisionui.io/placeholders/text/xxs.png"
                           alt="Example profile image"
                        />
                     </a>
                  </div>
                  <div class="env-media__body">
                     <label class="env-assistive-text" for="#example-input6"
                        >Example input</label
                     >
                     <input
                        type="text"
                        id="example-input6"
                        class="env-form-input"
                     />
                  </div>
                  <div class="env-media__actions">
                     <button
                        type="button"
                        class="env-button env-button--primary"
                     >
                        Comment
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </article>
   </li>
</ul>
```
