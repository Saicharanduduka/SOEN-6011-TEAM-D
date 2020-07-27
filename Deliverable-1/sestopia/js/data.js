const pageNotFoundMessage = `
<div class="col-10">
<h2 class="pb-3">Page Not Found</h2>
<p>
<a href="./index.html">Return Home</a>
</p>
</div>
`;

const content = [{
        title: `Home Page`,
        description: `TODO: Description`,
        text: `
	<div class="row justify-content-center text-center">
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Design">
	<img src="icons/research.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Design</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Quality">
	<img src="icons/file.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Quality</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Maintenance">
	<img src="icons/code.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Maintenance</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Engineering Process">
	<img src="icons/engineering.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Engineering Process</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Testing">
	<img src="icons/test.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Testing</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Requirements">
	<img src="icons/text.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Requirements</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Software Engineering Management">
	<img src="icons/influencer.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Software Engineering Management</strong></p>
	</a>
	</div>
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
	<a href="?page=Computing Foundations">
	<img src="icons/problem.png" class="img-fluid skill-icon" alt="skill icon">
	<p class="text-capitalize"><strong>Computing Foundations</strong></p>
	</a>
	</div>
	</div>
	`,
    },
    {
        title: `About Us`,
        description: `Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
    {
        title: `Software Design`,
        description: `Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		User research and persona
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
	Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>

		<div class="row" style="padding-top:70px">
			
			<div class="column">
				<div class="card">
					<h4>TOOL 1</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>TOOL 2</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>TOOL 3</h4>
					<p>Description</p>
				</div>
			</div>


			<div class="column">
				<div class="card">
					<h4>TOOL 4</h4>
					<p>Description</p>
				</div>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> References </h2>
		Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum.
		<hr class="smSolid" ></hr>
	</div>	`,
    },
    {
        title: `Software Quality`,
        description: `Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `
	
	<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		Conducting Reviews and Audits
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		Management Reviews, Technical Reviews, Inspections, Walkthroughs
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		Functional and Technical Understanding of the system  
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		Software Requirements,Software Testing
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
		 Decision maker (i.e., software lead), a Review leader, a recorder, and checkers (technical staff members who examine the work-products). 
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		Examination of software engineering artifacts with respect to standards that have been established by the organization or project for those artifacts.
		
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		Management reviews evaluate actual project results with respect to plans.
        Technical reviews (including inspections, walkthrough, and desk checking) examine engineering work-products.
		
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>
		<div class="row" style="padding-top:70px">
			
			<div class="column">
				<div class="card">
					<h4>Phabricator</h4>
					<p>Phabricator is a complete suite of open-source software development applications which include light-weight web-based code review, planning, testing, browsing and audit score, finding bugs, etc.

Key Features:

Code review tool from Phabricator suite is termed as “Differential”. It is used in minimizing the efforts required in creating the best quality code.
Phabricator has two types of code review workflows, namely “pre-push” also termed as “review” and “post-push” termed as “audit”.
Phabricator can be integrated with Git, Subversion, and Mercurial.</p>
				</div>
			</div>
			<div class="column">
				<div class="card">
					<h4>Crucible</h4>
					<p>Crucible is a web-based collaborative code review application used by developers for code review, finding defects, discussing the changes and knowledge sharing, etc.

Key Features:

Crucible is a flexible application that accommodates ample range of work approaches and team sizes.
Crucible is a lightweight peer code review tool that is used in pre-commit and post-commit reviews.
Code review has become easy for SVN, Perforce, and CVS etc using Crucible.</p>
				</div>
			</div>
			<div class="column">
				<div class="card">
					<h4>Veracode</h4>
					<p> Veracode (now acquired by CA Technologies) is a company which delivers various solutions for automated & on-demand application security testing, automated code review, etc.

Key Features:

Veracode is used by the developers in creating secured software by scanning the binary code or byte code in place of source code.
Using Veracode one can identify the improper encrypted functionalities, malicious code and backdoors from source code.
Veracode can review a large amount of code and returns the results immediately.
To use Veracode there is no need to buy any software or hardware, you just need to pay for the analysis services you need.</p>
				</div>
			</div>
			<div class="column">
				<div class="card">
					<h4>Review Board</h4>
					<p>Review Board is a web-based, collaborative, free and open-source tool used for code review and document review by open-source projects and companies.

Key Features:

Using Review Board for code review one can save money and time. Time saved can be used in concentrating on creating great software.
Review Board can be integrated with ClearCase, CVS, Perforce, Plastic, etc.
In a code review by Review Board tool, the code is syntax highlighted which makes it be read faster.
Review Board supports pre-commit reviews and post-commit reviews.</p>
				</div>
			</div>
		</div>
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		6
		<hr class="smSolid" ></hr>
	</div>
	<div class="sm">
		<h2  class="sm"> References </h2>
		https://www.softwaretestinghelp.com/code-review-tools/
		https://www.guru99.com/software-quality-assurance-test-audit-review-makes-your-life-easy.html
		http://www.qasigma.com/2008/12/sqa-audit.html
		<hr class="smSolid" ></hr>
	</div>	
`,
    },
    {
        title: `Software Maintenance`,
        description: `<hr border-top: 3px solid #bbb;></hr><br>Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `
	
	<hr style="solid 5px #bbb"></hr>
	<div class="sm">
		<h2  class="sm"> Name of Skill </h2>
		Reengineering
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Classification of Skill </h2>
		Technical
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Prerequisites for Skill </h2>
		Programming  
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Related Software Engineering Area(s)  </h2>
		Software Quality,Software Testing,Software Configuration Management
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Rationale for Skill </h2>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm"><h2  class="sm"> Roles for Skill </h2>
		Requires skill to understand code written by others, helps to increase efficiency of the code.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Work Related to Skill </h2>
		Refactor, Reverse eng, code restructuring, forward eng,redocumentation
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Real-World Example </h2>
		taking a legacy sofware and adapting to mordern systems.
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm" > Tools Supporting the Skill </h2>

		<div class="row" style="padding-top:70px">
			
			<div class="column">
				<div class="card">
					<h4>Lighthouse</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Dependency analyzer</h4>
					<p>Description</p>
				</div>
			</div>

			<div class="column">
				<div class="card">
					<h4>Disassembler</h4>
					<p>Description</p>
				</div>
			</div>


			<div class="column">
				<div class="card">
					<h4>PE and HEX editors</h4>
					<p>Description</p>
				</div>
			</div>

		</div>

		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> Skill Self-Assessment </h2>
		5
		<hr class="smSolid" ></hr>
	</div>


	<div class="sm">
		<h2  class="sm"> References </h2>
		<hr class="smSolid" ></hr>
	</div>	
`
    },
    {
        title: `Software Engineering Process`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
    {
        title: `Software Testing`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
    {
        title: `Software Requirements`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
    {
        title: `Software Engineering Management`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `
		<hr style="solid 5px #bbb"></hr>
		<div class="sm">
			<h2  class="sm"> Name of Skill </h2>
			Scheduling
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Classification of Skill </h2>
			Hard, Non-Technical.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Prerequisites for Skill </h2>
			Technical experience, critical thinking, anticipation skills, delegating, abstraction capability.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Related Software Engineering Area(s)  </h2>
			Software Project Management,Risk management.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Rationale for Skill </h2>
			Time is a major concern in projects and in software projects its no different, being able to manage it through precise schedule can play an important role in project management giving the information needed to  provide solutions from risk management to providing all needs of the project across its life span.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm"><h2  class="sm"> Roles for Skill </h2>
			Project Manager, Risk Manager, Scrum Master, etc…
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Work Related to Skill </h2>
			Building cronograms, estimate and identify risks in early stages of the project, cronogram control.
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Real-World Example </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>Estimator/Project Coordinator</h4>
						<p>Responsible for coordinating the construction projects from start to finish.</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Senior Director, Project Management Office</h4>
						<p>Responsible for driving the overall strategy for the Project Management Office and providing industry standard project controls to effectively deliver large-scale capital projects and integrated programs within the Nuclear Power industry.</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Risk Assessment Officer</h4>
						<p>Provides planned, systematic project risk management support and oversight to ensure that projects’ risks are managed to support capital construction projects being delivered in a timely, safe, cost effective manner, with the required level of quality.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="sm">
			<h2  class="sm"> Role of Academia or Industry in Cultivating the Skill </h2>
			<p>Hard to find an explicit approach, what drives the development of the skill is that this is the very essence of a project, three of the most fundamental pilar are time, budget and quality which is exactly what schedulling is about, how to make the budget and the quality into the time available or any similar fiting among these 3.</p>
			<p>Many ways of cultivating it have been raised, but I bring the attention to the agile methodology, which is a new way of scheduling which gives more freedom to handle the unknown which is very unstable.</p>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm" > Tools Supporting the Skill </h2>
			<div class="row" style="padding-top:70px">
				
				<div class="column">
					<div class="card">
						<h4>Microsoft Project</h4>
						<p>Description</p>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<h4>Monday.com</h4>
						<p>Description</p>
					</div>
				</div>
			</div>
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> Skill Self-Assessment </h2>
			4
			<hr class="smSolid" ></hr>
		</div>
		<div class="sm">
			<h2  class="sm"> References </h2>
			<p><a href="https://ca.indeed.com/?r=us">Indeed</a></p>
			<p><a href="https://www.pmi.org/learning/library/scheduling-professional-career-option-certified-6600">Project Management Institute</a></p>
			<p><a href="https://www.cleverism.com/skills-and-tools/scheduling/">Cleverism</a></p>
			<p><a href="https://www.mindtools.com/pages/article/newHTE_07.htm">MindTools</a></p>
			<hr class="smSolid" ></hr>
		</div>	
		`,
    },
    {
        title: `Computing Foundations`,
        description: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. `,
        text: `<p>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dictum condimentum. Donec aliquam libero eu malesuada aliquam. Aliquam erat volutpat. Proin eu velit ut augue rutrum vestibulum. Maecenas sit amet nisl arcu. Aenean sagittis tempor felis, at facilisis nulla mattis vel. Duis sed magna cursus, pharetra enim a, vehicula sem. Phasellus velit ex, porttitor quis tempor in, congue sed felis. Aliquam accumsan tellus ac lectus porta dictum. Duis imperdiet, purus id ultricies ullamcorper, quam nibh dictum felis, sit amet volutpat enim arcu et lacus. In eget massa feugiat metus laoreet varius. Praesent finibus eget nunc ut finibus. Praesent vitae tincidunt orci. Pellentesque vulputate nisl sed nunc tempor blandit.</p><p><a href="./index.html">Return Home</a></p>`,
    },
];
