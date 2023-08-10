/**
 * This function opens the help page by returning the HTML code.
 *
 */
function renderHelp() {
    let render = `
    <div class="container_help">
        <div class="arrow_right">
            <img onclick="openSummary()" class="arrow_help" src="img/black_arrow_back.svg">
        </div>
        <h2 class="h2_help">Help</h2>
        <span id="what_is_join" class="small_headlines_help">What is Join?</span>
        <span id="introduction_join" class="span_help" >Join is the ultimate Kanban management tool, empowering teams to streamline workflows, visualize tasks, and enhance productivity. With its intuitive interface, customizable boards, and collaborative features, Tools transforms your work processes into a smooth, visual experience. Effortlessly track tasks, assign responsibilities, and monitor progress, all in one platform. Whether you're a small team or a large enterprise, Tools adapts to your needs, helping you achieve seamless project management. Say goodbye to complexity and hello to simplicity with Tools, your go-to Kanban companion for optimized efficiency and success.
        </span>
        <span id="how_to_use_it" class="small_headlines_help">How to use it</span
    <ol>
        <li>On the board page, you can view and modify the current status of projects. Use drag and drop to move ongoing projects to the latest project status.</li>
        <li>On the 'Add Task' page, you can create tasks. You have the option to add collaborating team members and set a deadline. Additionally, you can insert subtasks.</li>
        <li>The 'Contact' page provides an overview of all contacts working in the Join tool. Here, you'll find information such as phone numbers and email addresses of all individuals.</li>
    </ol>
    </div>
    `

    return render;
}