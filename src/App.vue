<template>
  <div id="app">
    <div class="bg-gray-400 font-sans leading-normal tracking-normal h-screen">
      <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span class="text-2xl pl-2"><i class="em em-grinning"></i> Vue Simple Print</span>
          </a>
        </div>
      </nav>
      <div class="p-6 pt-24">
        <div class="mb-4">
          <button
            v-simple-print="'contentToPrint'"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Print Content</button>
        </div>
        <div id="contentToPrint" class="border border-solid border-gray-100 rounded p-6 bg-white">
          <table class="table-auto">
            <thead>
            <tr>
              <th class="px-4 py-2">Title</th>
              <th class="px-4 py-2">Author</th>
              <th class="px-4 py-2">Views</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="border px-4 py-2">Intro to CSS</td>
              <td class="border px-4 py-2">Adam</td>
              <td class="border px-4 py-2">858</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
              <td class="border px-4 py-2">Adam</td>
              <td class="border px-4 py-2">112</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Intro to JavaScript</td>
              <td class="border px-4 py-2">Chris</td>
              <td class="border px-4 py-2">1,280</td>
            </tr>
            </tbody>
          </table>
          <br>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import "assets/tailwind.min.css";
</style>
