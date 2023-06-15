# Yarvis405Web.github.io                                                                                                                                           
# theme
	dark theme(main -> #1d1c1a, second -> #c3b1e1, main-font -> #faf8f6, sub-font -> #808080)
	light theme(main -> #faf8f6, second -> #c3b1e1, main-font -> #1c1d1a, sub-font -> #808080)

# Layout *js layout changes*
    header(h1, nav)

    main
    	- home(main, projects, advertisement petition)
            - advertisement: the two people with more advertisements views will get a 40% discount for any product 

    	- services
    		- shop(layout, services)
    		- support(Layout, services)

    	- about(whoami, portfolio, cv, certificates)

    	- advertising

    footer(owner info, sponsors & legal info)