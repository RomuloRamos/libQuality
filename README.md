# libQuality

Its a first versio of a aplication that consults GitRepositories, and return metrics about it.

If you want test, please access: http://libquality-com-br.umbler.net/gitRequest/metrics with an App like Postmant, or Insomnia, and make this:


GET: http://libquality-com-br.umbler.net/gitRequest/metrics
BODY:
{
    "strFullName": ""
}


Wait...
Example answer:

{
    "averageDays": 612.3404083986476,
    "stdDeviation": 555.6909333235343,
    "varianceValue": 308792.41337798064,
    "bFound": true,
    "data": {
        "name": "react",
        "id": 10270250,
        "full_name": "facebook/react",
        "private": false,
        "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        "open_issues": 658,
        "pulls_url": "https://api.github.com/repos/facebook/react/pulls{/number}",
        "forks_count": 31732,
        "forks_url": "https://api.github.com/repos/facebook/react/forks",
        "stargazers_count": 159765,
        "collaborators_url": "https://api.github.com/repos/facebook/react/collaborators{/collaborator}"
    },
    "numberOfPullRequests": 148,
    "numberOfIssues": 510,
    "issuesList": [
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20343",
            "title": "[eslint-plugin-react-hooks] Bug: ESLint crashes if there's a `useEffect` / `useLayoutEffect` invocation without any arguments.",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-28T15:49:52Z",
            "updated_at": "2020-11-28T23:18:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20342",
            "title": "[eslint-plugin-react-hooks]: Can't use hooks in static class methods",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-28T12:54:02Z",
            "updated_at": "2020-11-28T15:00:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20339",
            "title": "Improved \"memory leak\" warning",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-27T14:10:21Z",
            "updated_at": "2020-11-27T14:10:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20337",
            "title": "Bug: Run exceptions in Chrome Extension",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-27T09:43:59Z",
            "updated_at": "2020-11-28T05:56:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20336",
            "title": "Question: Is there a experimental release based on 17 stable?",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-27T08:32:45Z",
            "updated_at": "2020-11-27T08:32:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20332",
            "title": "Bug: React's batching makes state comparison checks unreliable",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-26T13:27:10Z",
            "updated_at": "2020-11-27T18:11:40Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20331",
            "title": "Bug: custom hooks are linted by rule `react-hooks/exhaustive-deps` because their name contains `Effect`",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-25T20:11:53Z",
            "updated_at": "2020-11-25T20:14:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20330",
            "title": "Bug: onLoadStart is not passed to img",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-25T14:17:53Z",
            "updated_at": "2020-11-27T15:53:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20327",
            "title": "Bug: [react-reconciler] Impossible to import react-reconciler correctly in typescript library without setting esModuleInterop:true in tsconfig.",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-24T06:10:58Z",
            "updated_at": "2020-11-24T09:20:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20326",
            "title": "Error: \"value is undefined\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-24T04:37:37Z",
            "updated_at": "2020-11-24T09:30:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20323",
            "title": "Feature Request:  Add some COMPARISONS method for dependencies in the \"useEffect\" hook. For number datatype, the inbuilt comparison method works just fine but for \"Arrays\", it creates problem. I have shown an example below:  ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-23T19:21:08Z",
            "updated_at": "2020-11-25T15:26:02Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20311",
            "title": "Feature Request: useComponent Hook",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-20T22:16:11Z",
            "updated_at": "2020-11-27T08:31:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20296",
            "title": "Error: \"Cannot read property 'concat' of undefined\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-19T03:32:47Z",
            "updated_at": "2020-11-24T18:18:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20295",
            "title": "Error: \"Could not find node with id \"7348\" in commit tree\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-19T03:30:47Z",
            "updated_at": "2020-11-19T19:28:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20294",
            "title": "Bug: function in useState hook, setting different value ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-19T02:00:47Z",
            "updated_at": "2020-11-19T10:06:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20262",
            "title": "Bug: react-hooks/exhaustive-deps false postive when given undefined as deps",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-15T19:26:35Z",
            "updated_at": "2020-11-20T19:39:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20261",
            "title": "Bug: Components tab goes blank with React 16.8.0",
            "state": "open",
            "assignees": [
                {
                    "login": "abelardolg",
                    "id": 22522883,
                    "node_id": "MDQ6VXNlcjIyNTIyODgz",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/22522883?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/abelardolg",
                    "html_url": "https://github.com/abelardolg",
                    "followers_url": "https://api.github.com/users/abelardolg/followers",
                    "following_url": "https://api.github.com/users/abelardolg/following{/other_user}",
                    "gists_url": "https://api.github.com/users/abelardolg/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/abelardolg/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/abelardolg/subscriptions",
                    "organizations_url": "https://api.github.com/users/abelardolg/orgs",
                    "repos_url": "https://api.github.com/users/abelardolg/repos",
                    "events_url": "https://api.github.com/users/abelardolg/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/abelardolg/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-11-15T14:52:32Z",
            "updated_at": "2020-11-16T16:54:12Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20258",
            "title": "Issue regarding ESLint react-hooks - 'exhaustive-deps' rule ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-14T23:13:55Z",
            "updated_at": "2020-11-22T16:54:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20248",
            "title": "Bug: [eslint-plugin-react-hooks] Constructions should be caught in default props/args",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-13T17:46:29Z",
            "updated_at": "2020-11-13T18:23:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20244",
            "title": "eslint-plugin-react-hooks: eslint doesn't see the conditional operator '??'",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-13T04:56:11Z",
            "updated_at": "2020-11-18T17:20:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20238",
            "title": "Bug: peerDeps react in react-test-renderer has a massive minor bump ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-12T17:14:49Z",
            "updated_at": "2020-11-12T22:40:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20237",
            "title": "Bug: v16.14.0 tag is incorrectly shows v17-alpha",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-12T17:10:12Z",
            "updated_at": "2020-11-12T17:11:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20236",
            "title": "DevTools: Flag \"nested updates\" in the Profiler UI",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-11-12T16:17:08Z",
            "updated_at": "2020-11-13T14:12:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20235",
            "title": "Bug: Cannot import 'react/jsx-runtime' from esm node/webpack 5",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-12T15:31:54Z",
            "updated_at": "2020-11-27T12:18:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20222",
            "title": "Can I use mountReducer to refactor mountState?",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-11T12:32:06Z",
            "updated_at": "2020-11-11T12:32:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20205",
            "title": "Feature suggestion: Allow custom list of hooks to ignore on exhaustive-deps",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-09T20:01:11Z",
            "updated_at": "2020-11-25T19:56:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20204",
            "title": "Bug: eslint-plugin-react-hooks: Cannot read property 'type' of undefined at analyzePropertyChain",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-09T18:15:07Z",
            "updated_at": "2020-11-11T17:49:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20198",
            "title": "Re-land unmounting error boundaries changes",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-11-09T15:14:21Z",
            "updated_at": "2020-11-13T14:20:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20197",
            "title": "Error: \"Commit tree does not contain fiber 1527. This is a bug in React DevTools.\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-09T14:05:38Z",
            "updated_at": "2020-11-20T17:34:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20196",
            "title": "Bug: eslint-plugin-react-hooks doesn't report conditional typescript \"?.\" hooks",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-09T12:17:51Z",
            "updated_at": "2020-11-09T14:10:42Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20186",
            "title": "Distribute source maps for easier debugging in Chrome's Performance tab",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-06T21:10:50Z",
            "updated_at": "2020-11-10T08:51:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20178",
            "title": "Bug: devtools the expanded state and the state object are out of sync",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-06T11:23:28Z",
            "updated_at": "2020-11-21T14:59:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20177",
            "title": "Development flavor is way bigger than the production one",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-06T10:18:09Z",
            "updated_at": "2020-11-10T13:08:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20176",
            "title": "An improvement on fast return in markUpdateLaneFromFiberToRoot()",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-06T09:33:48Z",
            "updated_at": "2020-11-06T09:33:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20173",
            "title": "Error: \"Cannot read property 'length' of undefined\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-06T04:25:53Z",
            "updated_at": "2020-11-06T19:17:14Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20162",
            "title": "Bug: react-hooks/exhaustive-deps false positive when deps is defined with typescript const typing",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-05T12:17:58Z",
            "updated_at": "2020-11-05T12:21:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20161",
            "title": "Bug: Input minLength not working after type changed",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-05T09:45:52Z",
            "updated_at": "2020-11-05T14:52:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20160",
            "title": "Bug: react-hooks/exhaustive-deps false positive on additionalHooks' definition",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-05T09:38:32Z",
            "updated_at": "2020-11-05T09:41:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20159",
            "title": "Bug: can not pass some special custom attribute such as `size` ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-04T21:15:20Z",
            "updated_at": "2020-11-20T18:32:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20144",
            "title": "React Developer Tools triggers console error in Firefox for protected URLs",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-02T08:23:01Z",
            "updated_at": "2020-11-12T21:31:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20141",
            "title": "Bug: Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering if debugger present",
            "state": "open",
            "assignees": [],
            "created_at": "2020-11-01T14:50:03Z",
            "updated_at": "2020-11-18T14:46:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20139",
            "title": "Bug: Usage of \"Reac.forwardRef\" in \"React.memo\" distorts profiling report",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-10-31T07:06:04Z",
            "updated_at": "2020-11-02T16:50:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20135",
            "title": "react-devtools-inline: How to remount/reuse DevTools frontend after unmount",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-30T03:12:49Z",
            "updated_at": "2020-11-10T08:15:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20131",
            "title": "Bug: Uncaught Error: Unable to find node on an unmounted component in react 17.0.1",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-29T18:27:03Z",
            "updated_at": "2020-11-03T22:06:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20127",
            "title": "Bug: Can't hydrate useOpaqueIdentifier generated object in another component",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-29T11:20:33Z",
            "updated_at": "2020-10-29T12:40:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20123",
            "title": "Bug: Should have a queue",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-29T06:21:45Z",
            "updated_at": "2020-10-29T14:41:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20120",
            "title": "Bug: React DevTools failing silently on Debian",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-29T01:36:45Z",
            "updated_at": "2020-10-29T13:44:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20111",
            "title": "Question: using setState to access latest state in event handler",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-27T20:19:20Z",
            "updated_at": "2020-10-28T15:02:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20099",
            "title": "feature: Move react-is to react/is",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-26T12:28:28Z",
            "updated_at": "2020-10-26T19:25:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20097",
            "title": "Feedback for 'exhaustive-deps' lint rule",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-26T09:13:08Z",
            "updated_at": "2020-10-26T09:42:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20095",
            "title": "Bug: react-devtools prints too many logs of WS failed",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-26T05:25:42Z",
            "updated_at": "2020-10-29T02:09:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20088",
            "title": "Bug: Input leaks fiber nodes in recent versions of chromium",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-24T00:56:07Z",
            "updated_at": "2020-10-26T06:08:10Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20085",
            "title": "Feature Request: Adding filter (search) to react DevTools Profiler",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-23T14:17:15Z",
            "updated_at": "2020-10-23T14:35:39Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20074",
            "title": "Bug: useEffect Timing changes depending on if Portal was rendered",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-21T14:25:14Z",
            "updated_at": "2020-11-25T22:39:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20068",
            "title": "Feature request: A useLayoutEffect with read/write batching across a tree",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-21T09:24:35Z",
            "updated_at": "2020-10-22T08:01:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20065",
            "title": "Bug: onCompositionEnd not called",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-21T01:41:49Z",
            "updated_at": "2020-10-21T01:44:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20061",
            "title": "Bug: Devtools' update-notifier usage is overly eager",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-20T18:54:39Z",
            "updated_at": "2020-11-28T16:46:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20052",
            "title": "Misspelled \"Escape\" event type in Focus.js",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-19T08:21:12Z",
            "updated_at": "2020-10-19T14:21:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20047",
            "title": "Clarify SSR expectations/contract",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-17T10:31:37Z",
            "updated_at": "2020-10-17T17:33:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20031",
            "title": "Suggestion: transforming jsx to jsx-runtime without `createElement` fallback",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-15T05:40:57Z",
            "updated_at": "2020-10-18T08:24:52Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/20003",
            "title": "Feature Request: Add Warning when consuming a context whose provider is not mounted",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-12T21:10:29Z",
            "updated_at": "2020-10-17T21:01:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19991",
            "title": "Bug: Infinite rendering resulting in freezing of tab/browser",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-09T15:01:20Z",
            "updated_at": "2020-10-09T15:01:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19976",
            "title": "Error: \"Electron failed to install correctly, please delete node_modules/electron and try installing again\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-07T20:11:39Z",
            "updated_at": "2020-10-08T18:27:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19968",
            "title": "Bug: Fast memory leaks on simple React App",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-06T12:25:35Z",
            "updated_at": "2020-10-28T19:16:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19963",
            "title": "eslint-plugin-react-hooks: New rule to require useState updater.",
            "state": "open",
            "assignees": [],
            "created_at": "2020-10-05T23:12:31Z",
            "updated_at": "2020-10-07T01:27:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19948",
            "title": "Bug: unstable_useMutableSource throws error when mutated before subscribe",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-10-02T19:53:35Z",
            "updated_at": "2020-11-09T15:55:49Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19932",
            "title": "Better support <template> tags",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-30T17:26:16Z",
            "updated_at": "2020-10-17T05:43:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19927",
            "title": "Error: \"Cannot read property 'isCollapsed' of undefined\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-30T02:34:29Z",
            "updated_at": "2020-09-30T07:14:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19925",
            "title": "Bug: useDeferredValue with a value that is new every render hangs browser",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-29T21:40:54Z",
            "updated_at": "2020-09-30T14:38:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19921",
            "title": "Bug: shallowEqual() is flawed",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-29T03:02:42Z",
            "updated_at": "2020-10-17T16:49:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19910",
            "title": "Suggestion: global custom attributes",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-25T17:28:43Z",
            "updated_at": "2020-09-25T20:06:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19901",
            "title": "Bug: hydrating fails with nested paragraph and dangerouslySetInnerHTML",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-24T19:36:39Z",
            "updated_at": "2020-09-24T19:39:42Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19891",
            "title": "FR: Allow displaying debug information for reconcilers in DevTools",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-23T12:18:50Z",
            "updated_at": "2020-09-24T20:06:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19887",
            "title": "Feature request: dealing with dependencies in custom React hooks",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-22T21:23:34Z",
            "updated_at": "2020-10-16T01:58:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19879",
            "title": "lazy state initiation in nested component is called multiple times when promises/resources resolve fast and called only once when promises/resources resolve slowBug: ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-21T17:14:56Z",
            "updated_at": "2020-09-21T17:47:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19870",
            "title": "Bug: Nested Suspense not catching fast resolved Promises",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-20T11:17:47Z",
            "updated_at": "2020-09-23T12:09:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19865",
            "title": "Removal of <script> functionality needs to be added to https://reactjs.org/docs/ and a warning displayed while in development mode.",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-18T21:44:45Z",
            "updated_at": "2020-09-19T02:20:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19860",
            "title": "Bug: input[type=\"radio\"] controlled value can get out-of-sync",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-18T13:26:15Z",
            "updated_at": "2020-10-18T09:23:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19857",
            "title": "Bug: React Portals - Memory Leak",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-18T09:19:11Z",
            "updated_at": "2020-09-18T09:19:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19851",
            "title": "Bug:  Component with a Symbol as key, causes Crash",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-17T18:14:16Z",
            "updated_at": "2020-10-01T01:38:34Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19848",
            "title": "Bug: Handling of symbols when used as deps incorrectly to create error message results in an unrelated TypeError: Cannot convert a Symbol value to a string",
            "state": "open",
            "assignees": [
                {
                    "login": "omarsy",
                    "id": 15034695,
                    "node_id": "MDQ6VXNlcjE1MDM0Njk1",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/15034695?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/omarsy",
                    "html_url": "https://github.com/omarsy",
                    "followers_url": "https://api.github.com/users/omarsy/followers",
                    "following_url": "https://api.github.com/users/omarsy/following{/other_user}",
                    "gists_url": "https://api.github.com/users/omarsy/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/omarsy/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/omarsy/subscriptions",
                    "organizations_url": "https://api.github.com/users/omarsy/orgs",
                    "repos_url": "https://api.github.com/users/omarsy/repos",
                    "events_url": "https://api.github.com/users/omarsy/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/omarsy/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-09-17T13:40:58Z",
            "updated_at": "2020-09-18T06:27:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19846",
            "title": "Bug: manually created 'change' events via new Event() don't trigger React event handlers",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-17T05:48:34Z",
            "updated_at": "2020-09-22T09:10:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19839",
            "title": "Error: \"Maximum call stack size exceeded\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-15T20:56:05Z",
            "updated_at": "2020-10-18T09:18:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19834",
            "title": "Bug: memoized component not re-rendering when prop changes after suspense resume",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-14T20:42:09Z",
            "updated_at": "2020-09-14T20:47:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19823",
            "title": "Feature request: bind event to react hook component. especially for typescript",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-12T10:29:24Z",
            "updated_at": "2020-09-22T23:51:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19818",
            "title": "Bug: Glitchy behaviour when rendering/setState in an onKeyDown event callback",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-11T13:56:29Z",
            "updated_at": "2020-09-30T04:27:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19800",
            "title": "Bug: Memory leakage with setInterval",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-09T16:00:17Z",
            "updated_at": "2020-10-17T06:03:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19781",
            "title": "Relax eslint-plugin-react-hooks for __DEV__ conditional hooks",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-06T20:29:09Z",
            "updated_at": "2020-11-07T19:16:05Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19778",
            "title": "Bug: React devtools \"highlight updates when components render\" and profiler output not matching when using memo",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-05T20:27:48Z",
            "updated_at": "2020-09-07T20:05:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19765",
            "title": "App crashes upon the automatic attempt to inspect hooks on a Fiber with tag of type ClassComponent",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-03T19:04:55Z",
            "updated_at": "2020-09-04T15:59:41Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19756",
            "title": "Bug: React DevTools throws ReferenceError: regeneratorRuntime is not defined",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-03T05:36:57Z",
            "updated_at": "2020-09-08T13:39:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19749",
            "title": "Bug: react-hooks/exhaustive-deps includes too much logic?",
            "state": "open",
            "assignees": [],
            "created_at": "2020-09-02T12:08:27Z",
            "updated_at": "2020-09-02T21:44:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19732",
            "title": "Bug: React DevTools 'Why did this component render?' incorrectly reports 'The parent component rendered'",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-31T23:15:59Z",
            "updated_at": "2020-09-03T12:33:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19731",
            "title": "Craft a demo profile for the scheduling profiler",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-31T18:53:34Z",
            "updated_at": "2020-08-31T20:42:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19713",
            "title": "Consider improving React.cloneElement validation in DEV",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-27T22:35:36Z",
            "updated_at": "2020-08-27T22:36:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19701",
            "title": "Bug: `Context.Consumer` inside `Suspense` does not receive context updates while suspended",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-26T18:09:04Z",
            "updated_at": "2020-10-01T17:37:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19695",
            "title": "Bug ?: Weird reconciliation result on list elements from array with same length as the list.",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-26T02:49:35Z",
            "updated_at": "2020-09-04T17:14:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19692",
            "title": "Bug: different handling of onMouseEnter & onMouseLeave based on pointerEvents in Chrome",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-25T16:05:35Z",
            "updated_at": "2020-08-25T18:06:49Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19683",
            "title": "Support Firefox profiles in scheduling profiler",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-24T08:30:58Z",
            "updated_at": "2020-08-31T14:49:42Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19671",
            "title": "Discussion: Async cleanups of useEffect",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-21T10:26:29Z",
            "updated_at": "2020-09-14T19:16:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19670",
            "title": "Add documentation for views abstraction",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-21T10:25:23Z",
            "updated_at": "2020-08-21T12:50:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19669",
            "title": "Show User Timing measures in the Scheduling Profiler UI",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-21T09:47:37Z",
            "updated_at": "2020-08-21T12:50:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19668",
            "title": "Show React version in Scheduling Profiler UI",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-21T09:34:35Z",
            "updated_at": "2020-08-21T12:50:49Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19667",
            "title": "Normalize panning across browsers in the Scheduling Profiler",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-21T09:34:28Z",
            "updated_at": "2020-08-21T12:50:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19666",
            "title": "Add an option to DevTools to enable double-logging",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-20T21:01:45Z",
            "updated_at": "2020-10-21T03:55:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19649",
            "title": "Bug: (17.0.0-rc.0) No changes to Native Component Stacks in production environment",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-19T14:12:42Z",
            "updated_at": "2020-08-20T07:16:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19645",
            "title": "Deepcode.ai found 67 issues, 4 of which are critical ( security and defects )",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-19T09:59:33Z",
            "updated_at": "2020-08-19T11:39:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19644",
            "title": "Bug: react-hooks/exhaustive-deps does not recognize different signaturres",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-19T07:01:23Z",
            "updated_at": "2020-09-15T08:29:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19637",
            "title": "Portal Event Bubbling Use Cases",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-18T12:16:29Z",
            "updated_at": "2020-10-17T08:43:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19613",
            "title": "Suggestion: don't re-throw errors caught by boundaries (in development)",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-14T16:22:28Z",
            "updated_at": "2020-11-25T16:17:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19611",
            "title": "Bug: click event is attached to createPortal",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-14T07:57:01Z",
            "updated_at": "2020-08-17T07:17:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19602",
            "title": "Error: \"getCommitTree(): Unable to reconstruct tree for root \"1\" and commit 21\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-13T12:28:03Z",
            "updated_at": "2020-08-31T15:32:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19589",
            "title": "Bug: SVG foreignObject misplaced on browser zoom in React app",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-11T17:05:18Z",
            "updated_at": "2020-11-10T04:47:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19587",
            "title": "DOM attribute stringification fixes",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-11T11:54:42Z",
            "updated_at": "2020-08-11T13:35:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19570",
            "title": "Bug: onInput is not firing on contentEditable div in IE11",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-10T10:50:30Z",
            "updated_at": "2020-08-10T17:55:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19541",
            "title": "Bug: Context doesn't work when exported from a package with multiple entrypoints",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-05T19:30:40Z",
            "updated_at": "2020-08-11T13:41:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19537",
            "title": "Bug: Overwriting console.log during rendering",
            "state": "open",
            "assignees": [],
            "created_at": "2020-08-05T15:00:00Z",
            "updated_at": "2020-10-19T03:56:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19491",
            "title": "Memory leak after component unload",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-30T08:45:20Z",
            "updated_at": "2020-08-05T06:21:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19482",
            "title": "Bug: the order of effect and cleanup in Parent and Child component is weird",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-29T10:25:37Z",
            "updated_at": "2020-11-20T23:31:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19476",
            "title": "[eslint-plugin-react-hooks] Bug: rules-of-hooks false positive conditional call after foreach",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-28T18:40:51Z",
            "updated_at": "2020-11-16T22:41:40Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19474",
            "title": "Bug: Constraint Validation API not reflected on Textarea's value attribute change",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-28T14:17:45Z",
            "updated_at": "2020-07-28T14:19:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19419",
            "title": "Bug: MouseEnter does not fire when coming _from_ disabled elements",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-20T17:18:11Z",
            "updated_at": "2020-07-22T00:34:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19416",
            "title": "Should act() warnings be deduplicated by component stack?",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-20T12:52:06Z",
            "updated_at": "2020-10-27T08:18:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19406",
            "title": "Bug: Updates to keyed lists break FLIP animations when they occur mid-animation",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-19T05:56:32Z",
            "updated_at": "2020-07-19T19:37:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19404",
            "title": "Bug: firefox 'select all' menu item not firing select events on textareas",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-19T02:37:44Z",
            "updated_at": "2020-08-20T11:25:02Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19400",
            "title": "Bug: onFocus and onBlur has inconsistent batching",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-18T01:00:15Z",
            "updated_at": "2020-09-23T23:34:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19371",
            "title": "Setup CI infra to run DevTools tests against multiple React versions",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "acdlite",
                    "id": 3624098,
                    "node_id": "MDQ6VXNlcjM2MjQwOTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/acdlite",
                    "html_url": "https://github.com/acdlite",
                    "followers_url": "https://api.github.com/users/acdlite/followers",
                    "following_url": "https://api.github.com/users/acdlite/following{/other_user}",
                    "gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
                    "organizations_url": "https://api.github.com/users/acdlite/orgs",
                    "repos_url": "https://api.github.com/users/acdlite/repos",
                    "events_url": "https://api.github.com/users/acdlite/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/acdlite/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-07-15T15:26:15Z",
            "updated_at": "2020-09-30T11:51:01Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19318",
            "title": "Bug: act warning misleading if an effect wasn't run",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-11T12:51:11Z",
            "updated_at": "2020-10-27T08:19:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19290",
            "title": "Bug: Unrelated state update in onKeyDown blocks onChange and breaks controlled component",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-09T11:33:11Z",
            "updated_at": "2020-07-28T00:27:02Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19246",
            "title": "Bug: missing interactions in profiler",
            "state": "open",
            "assignees": [],
            "created_at": "2020-07-03T16:25:36Z",
            "updated_at": "2020-07-23T13:07:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19219",
            "title": "Profiler dev tools suggestion: in \"ranked\" view, add a way to group/aggregate component instances",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-30T15:10:54Z",
            "updated_at": "2020-07-06T19:54:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19217",
            "title": "Feature proposal(eslint-react-hooks): don't require empty dependency useCallback in another dependency array",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-30T13:27:19Z",
            "updated_at": "2020-07-27T16:51:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19177",
            "title": "Bug: I want to confirm why the parameter of currentTime is missing in Line 68 of schedule.js source code.",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-23T03:43:01Z",
            "updated_at": "2020-09-16T11:30:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19162",
            "title": "Hiding MUI Components inside React Developer Tools",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-19T14:12:47Z",
            "updated_at": "2020-09-10T18:14:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19150",
            "title": "Proposition about onInput/onChange",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-18T04:20:35Z",
            "updated_at": "2020-09-17T11:58:14Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19134",
            "title": "Could you please rename master branch and remove any problematic references?",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-15T04:25:20Z",
            "updated_at": "2020-06-23T20:13:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19131",
            "title": "Bug: useState with ResizeObserver leaks React components on Safari 13.1",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-14T06:23:22Z",
            "updated_at": "2020-08-12T01:19:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19117",
            "title": "Bug: rules-of-hooks ESLint rule not catching conditional hooks in React.memo() (Typescript)",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-11T20:52:39Z",
            "updated_at": "2020-10-23T17:50:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19078",
            "title": "Bug: Form reset lost checkbox onChange event",
            "state": "open",
            "assignees": [],
            "created_at": "2020-06-05T08:37:31Z",
            "updated_at": "2020-06-25T23:48:12Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19056",
            "title": "[eslint-plugin-react-hooks] Add whitelist for functions that are not to be considered as callbacks",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-31T17:57:36Z",
            "updated_at": "2020-07-17T07:16:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19034",
            "title": "exhaustive-deps: custom effects should support async functions",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-28T14:10:11Z",
            "updated_at": "2020-09-14T17:39:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/19016",
            "title": "Bug: Mouse leave event not fired after removing portal",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-27T11:23:58Z",
            "updated_at": "2020-10-12T05:28:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18986",
            "title": "Bug: Firefox: Autocomplete/Autofill still not working",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-23T08:21:11Z",
            "updated_at": "2020-07-21T17:41:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18965",
            "title": "Bug: React throws warning on browser default function",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-20T21:20:02Z",
            "updated_at": "2020-10-28T13:47:33Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18945",
            "title": "DevTools: Improve browser extension iframe support",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-18T09:35:01Z",
            "updated_at": "2020-10-06T13:39:34Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18940",
            "title": "Feature Request: <input type=\"textarea\" .../> ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-17T11:41:47Z",
            "updated_at": "2020-08-16T11:12:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18908",
            "title": "Show better warning when <React.Fragment> is missing a key",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-13T14:59:21Z",
            "updated_at": "2020-09-03T13:03:05Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18906",
            "title": "Bug: IE11 with Suspense doesn't support direct child with inline display: flex style",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-13T14:22:39Z",
            "updated_at": "2020-10-19T14:00:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18883",
            "title": "Feature proposal(eslint-react-hooks): Recursive dependencies scanning for exhaustive-deps",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-10T17:37:06Z",
            "updated_at": "2020-11-14T22:58:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18873",
            "title": "Deprecate SyntheticKeyboardEvent.{charCode,keyCode,which}",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-09T03:48:45Z",
            "updated_at": "2020-08-08T12:03:12Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18859",
            "title": "Error: \"Commit tree already contains fiber 19587. This is a bug in React DevTools.\"",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-07T13:49:45Z",
            "updated_at": "2020-05-14T15:57:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18857",
            "title": "[eslint-plugin-react-hooks] just mark react's implemented hooks as invalid in classes",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-07T10:19:52Z",
            "updated_at": "2020-07-17T11:11:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18841",
            "title": "Bug: Error in useEffect is caught in ErrorBoundary, but still logs uncaught error to console in tests",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-06T12:50:33Z",
            "updated_at": "2020-09-06T11:50:42Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18835",
            "title": "useMutableSource: Release version snapshots once hydration is finished",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-05-05T22:28:47Z",
            "updated_at": "2020-05-05T22:29:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18822",
            "title": "Add devtools \"Inspect React component\" to right-click menu",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-04T22:50:47Z",
            "updated_at": "2020-09-02T13:04:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18818",
            "title": "Bug: devtools \"rendered at\" for child components uses value of top component",
            "state": "open",
            "assignees": [],
            "created_at": "2020-05-04T17:58:37Z",
            "updated_at": "2020-11-19T20:38:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18790",
            "title": "Memory Leak - React DOM keeps references to stale child components when using the Container/Pure component pattern",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-30T16:16:52Z",
            "updated_at": "2020-11-12T23:37:52Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18777",
            "title": "Bug: Stop browser hanging on Maximum update depth exceeded ",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-29T11:01:30Z",
            "updated_at": "2020-07-29T16:20:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18768",
            "title": "Bug: `React.lazy` throws undefined instead of an `Error` object",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-28T15:13:02Z",
            "updated_at": "2020-05-22T02:49:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18758",
            "title": "Jest: Cannot assign to read only property '...' of object '...'",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-27T21:05:31Z",
            "updated_at": "2020-08-21T17:38:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18752",
            "title": "Bug: <iframe /> onLoad is not getting triggered after the reload triggered by moving the DOM Node",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-27T11:26:46Z",
            "updated_at": "2020-07-21T22:53:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18661",
            "title": "Bug: Nested SuspenseList may display fallbacks while the component is loaded on re-render",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-17T22:29:35Z",
            "updated_at": "2020-05-22T08:47:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18652",
            "title": "[Flight] Make react-flight works between UI thread and webworkers",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-17T08:44:25Z",
            "updated_at": "2020-07-09T13:00:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18640",
            "title": "Allow opting out of invokeGuardedCallbackDev",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-16T16:13:34Z",
            "updated_at": "2020-10-12T01:57:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18616",
            "title": "Bug: window as new portal will break event delegation",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-15T19:32:36Z",
            "updated_at": "2020-07-13T12:50:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18610",
            "title": "Bug: ReactArt-test fails with node <= 12.9",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-14T19:51:22Z",
            "updated_at": "2020-09-04T04:35:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18595",
            "title": "Delay setting useTransition isPending to true until JND",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-14T00:41:05Z",
            "updated_at": "2020-07-09T01:30:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18594",
            "title": "feat: allow multiple opaque identifiers in HTML attributes",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-13T21:54:33Z",
            "updated_at": "2020-08-02T18:15:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18591",
            "title": "Bug: Bubbled onFocus handler that triggers an update prevents onChange handler in createRoot",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-13T17:40:05Z",
            "updated_at": "2020-11-27T12:55:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18565",
            "title": "useOpaqueIdentifier and multiple React cases",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-09T23:12:06Z",
            "updated_at": "2020-04-16T23:52:37Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18502",
            "title": "Bug: Server hydration mistmatch and radio group with defaultChecked",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-06T10:24:24Z",
            "updated_at": "2020-10-07T03:24:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18499",
            "title": "Provide a renderer-agnostic equivalent of setNativeProps()",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-05T19:50:35Z",
            "updated_at": "2020-06-28T03:43:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18460",
            "title": "Bug: Suspense fallbacks potentially never showing due to a race",
            "state": "open",
            "assignees": [],
            "created_at": "2020-04-01T22:25:36Z",
            "updated_at": "2020-04-01T22:25:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18434",
            "title": "Bug: SuspenseList revealOrder=\"backwards\"  is not consistent without tail props",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-30T10:53:39Z",
            "updated_at": "2020-04-06T17:51:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18416",
            "title": "Bug: dragenter on text node contains parent node in event.target in Firefox",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-28T16:21:05Z",
            "updated_at": "2020-10-12T01:57:10Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18413",
            "title": "Bug: Editing context in react-devtools",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-28T11:37:38Z",
            "updated_at": "2020-09-15T22:41:41Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18402",
            "title": "Batching makes it difficult to perform imperative actions like focus",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-27T11:12:19Z",
            "updated_at": "2020-03-29T12:37:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18390",
            "title": "Bug: Event handlers on custom elements work on the client but not on the server",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-25T22:09:40Z",
            "updated_at": "2020-08-28T04:24:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18368",
            "title": "May be bug: onChange events don't fire in controlled forms in portals rendered in external window",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-22T05:13:07Z",
            "updated_at": "2020-04-27T16:57:33Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18314",
            "title": "Bug: React-test-renderer error when updating state in act",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-15T13:37:21Z",
            "updated_at": "2020-07-16T15:12:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18290",
            "title": "Bug: IE11 throws error Assignment to read-only properties is not allowed in strict mode",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-12T10:38:37Z",
            "updated_at": "2020-07-31T17:01:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18229",
            "title": "[Feature Request] Allow dependency length to change in hooks",
            "state": "open",
            "assignees": [],
            "created_at": "2020-03-05T19:36:28Z",
            "updated_at": "2020-09-23T10:19:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18128",
            "title": "Bug: input won't trigger onChange after a chain of setStates",
            "state": "open",
            "assignees": [
                {
                    "login": "acdlite",
                    "id": 3624098,
                    "node_id": "MDQ6VXNlcjM2MjQwOTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/acdlite",
                    "html_url": "https://github.com/acdlite",
                    "followers_url": "https://api.github.com/users/acdlite/followers",
                    "following_url": "https://api.github.com/users/acdlite/following{/other_user}",
                    "gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
                    "organizations_url": "https://api.github.com/users/acdlite/orgs",
                    "repos_url": "https://api.github.com/users/acdlite/repos",
                    "events_url": "https://api.github.com/users/acdlite/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/acdlite/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-02-25T15:54:28Z",
            "updated_at": "2020-08-26T16:08:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18116",
            "title": "React retains component references to old renders causing browser memory to increase",
            "state": "open",
            "assignees": [],
            "created_at": "2020-02-24T20:38:48Z",
            "updated_at": "2020-08-18T07:44:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18101",
            "title": "Arbitrary log lines may appear in between an error and the subsequent \"The above error…\" message",
            "state": "open",
            "assignees": [],
            "created_at": "2020-02-21T23:08:59Z",
            "updated_at": "2020-09-16T18:56:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18098",
            "title": "Bug: Unexpected render",
            "state": "open",
            "assignees": [
                {
                    "login": "acdlite",
                    "id": 3624098,
                    "node_id": "MDQ6VXNlcjM2MjQwOTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/acdlite",
                    "html_url": "https://github.com/acdlite",
                    "followers_url": "https://api.github.com/users/acdlite/followers",
                    "following_url": "https://api.github.com/users/acdlite/following{/other_user}",
                    "gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
                    "organizations_url": "https://api.github.com/users/acdlite/orgs",
                    "repos_url": "https://api.github.com/users/acdlite/repos",
                    "events_url": "https://api.github.com/users/acdlite/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/acdlite/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-02-21T20:47:07Z",
            "updated_at": "2020-08-25T04:32:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18051",
            "title": "Bug: [eslint-plugin-react-hooks] exhaustive-deps false positive on \"unnecessary\" dependency if its a React component",
            "state": "open",
            "assignees": [],
            "created_at": "2020-02-17T12:24:15Z",
            "updated_at": "2020-10-17T08:24:03Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/18006",
            "title": "Bug: useTransition's pending boolean is triggered immediately, even if there's no suspension",
            "state": "open",
            "assignees": [],
            "created_at": "2020-02-10T14:50:42Z",
            "updated_at": "2020-08-14T22:23:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17997",
            "title": "Bug: React Dev Tools Firefox extension fails to detect React",
            "state": "open",
            "assignees": [
                {
                    "login": "ruslan-shuster",
                    "id": 58134692,
                    "node_id": "MDQ6VXNlcjU4MTM0Njky",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/58134692?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ruslan-shuster",
                    "html_url": "https://github.com/ruslan-shuster",
                    "followers_url": "https://api.github.com/users/ruslan-shuster/followers",
                    "following_url": "https://api.github.com/users/ruslan-shuster/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ruslan-shuster/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ruslan-shuster/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ruslan-shuster/subscriptions",
                    "organizations_url": "https://api.github.com/users/ruslan-shuster/orgs",
                    "repos_url": "https://api.github.com/users/ruslan-shuster/repos",
                    "events_url": "https://api.github.com/users/ruslan-shuster/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ruslan-shuster/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-02-07T11:01:14Z",
            "updated_at": "2020-10-24T23:24:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17953",
            "title": "Bug: useReducer runs the queued updates with new props",
            "state": "open",
            "assignees": [],
            "created_at": "2020-02-01T07:58:03Z",
            "updated_at": "2020-11-13T08:52:03Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17938",
            "title": "Bug: Render-phase update to another root causes an over-rendering loop",
            "state": "open",
            "assignees": [
                {
                    "login": "sebmarkbage",
                    "id": 63648,
                    "node_id": "MDQ6VXNlcjYzNjQ4",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/63648?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/sebmarkbage",
                    "html_url": "https://github.com/sebmarkbage",
                    "followers_url": "https://api.github.com/users/sebmarkbage/followers",
                    "following_url": "https://api.github.com/users/sebmarkbage/following{/other_user}",
                    "gists_url": "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/sebmarkbage/subscriptions",
                    "organizations_url": "https://api.github.com/users/sebmarkbage/orgs",
                    "repos_url": "https://api.github.com/users/sebmarkbage/repos",
                    "events_url": "https://api.github.com/users/sebmarkbage/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/sebmarkbage/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-01-30T16:36:57Z",
            "updated_at": "2020-01-30T17:08:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17899",
            "title": "Bug: styles object using css variables and both a shorthand and a specific property renders incorrectly",
            "state": "open",
            "assignees": [],
            "created_at": "2020-01-23T15:58:13Z",
            "updated_at": "2020-04-11T23:19:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17894",
            "title": "Bug: button onFocus not called when focus() called from useEffect cleanup",
            "state": "open",
            "assignees": [],
            "created_at": "2020-01-23T05:30:23Z",
            "updated_at": "2020-10-09T13:08:03Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17855",
            "title": "Bug: DevTools DOM highlighting gets stuck after a prolonged hover",
            "state": "open",
            "assignees": [],
            "created_at": "2020-01-16T17:16:35Z",
            "updated_at": "2020-01-29T00:29:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17831",
            "title": "Bug: I shouldn't own the DOM fixtures website",
            "state": "open",
            "assignees": [],
            "created_at": "2020-01-14T03:27:48Z",
            "updated_at": "2020-01-15T19:19:46Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17794",
            "title": "flushPassiveEffects and IsThisRendererActing are on the wrong \"secret\" object",
            "state": "open",
            "assignees": [
                {
                    "login": "threepointone",
                    "id": 18808,
                    "node_id": "MDQ6VXNlcjE4ODA4",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/18808?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/threepointone",
                    "html_url": "https://github.com/threepointone",
                    "followers_url": "https://api.github.com/users/threepointone/followers",
                    "following_url": "https://api.github.com/users/threepointone/following{/other_user}",
                    "gists_url": "https://api.github.com/users/threepointone/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/threepointone/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/threepointone/subscriptions",
                    "organizations_url": "https://api.github.com/users/threepointone/orgs",
                    "repos_url": "https://api.github.com/users/threepointone/repos",
                    "events_url": "https://api.github.com/users/threepointone/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/threepointone/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2020-01-07T10:06:09Z",
            "updated_at": "2020-01-08T19:07:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17779",
            "title": "SuspenseList tail property not working on re-renders",
            "state": "open",
            "assignees": [],
            "created_at": "2020-01-04T18:44:35Z",
            "updated_at": "2020-01-09T20:04:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17741",
            "title": "hydrate SVG error: Expected server HTML to contain a matching <clipPath> in <svg>",
            "state": "open",
            "assignees": [],
            "created_at": "2019-12-29T19:33:12Z",
            "updated_at": "2020-01-07T06:22:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17624",
            "title": "React DevTools might retain references to unmounted DOM elements (and their Fibers)",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-12-16T18:55:33Z",
            "updated_at": "2020-01-08T23:38:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17609",
            "title": "Controlled numeric input gets cleared when unfocused",
            "state": "open",
            "assignees": [],
            "created_at": "2019-12-15T01:10:16Z",
            "updated_at": "2020-04-01T20:58:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17594",
            "title": "DevTools: Profiler: Enable correlating console logs to profiler output (and vice versa)",
            "state": "open",
            "assignees": [],
            "created_at": "2019-12-13T09:01:35Z",
            "updated_at": "2019-12-20T22:42:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17581",
            "title": "Input nodes leaked by the browser retain React fibers",
            "state": "open",
            "assignees": [],
            "created_at": "2019-12-12T01:40:26Z",
            "updated_at": "2020-05-13T17:02:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17553",
            "title": "DevTools: Provide full file path for React Native component stacks",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-12-09T10:38:24Z",
            "updated_at": "2020-01-08T23:38:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17527",
            "title": "Suspense priority warning does not work for any hook except the first one per component",
            "state": "open",
            "assignees": [
                {
                    "login": "lunaruan",
                    "id": 2735514,
                    "node_id": "MDQ6VXNlcjI3MzU1MTQ=",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/2735514?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/lunaruan",
                    "html_url": "https://github.com/lunaruan",
                    "followers_url": "https://api.github.com/users/lunaruan/followers",
                    "following_url": "https://api.github.com/users/lunaruan/following{/other_user}",
                    "gists_url": "https://api.github.com/users/lunaruan/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/lunaruan/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/lunaruan/subscriptions",
                    "organizations_url": "https://api.github.com/users/lunaruan/orgs",
                    "repos_url": "https://api.github.com/users/lunaruan/repos",
                    "events_url": "https://api.github.com/users/lunaruan/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/lunaruan/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-12-04T15:24:49Z",
            "updated_at": "2020-01-08T19:07:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17526",
            "title": "Triggering suspense with rejected promise causes re-render instead of error boundary",
            "state": "open",
            "assignees": [],
            "created_at": "2019-12-04T13:49:31Z",
            "updated_at": "2019-12-05T07:12:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17494",
            "title": "Undo behavior in controlled input doesn't work as expected",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-30T14:49:37Z",
            "updated_at": "2020-06-23T10:30:12Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17479",
            "title": "Idea: extract “static” component subtrees to HTML during build",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-28T03:05:50Z",
            "updated_at": "2019-12-03T16:55:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17436",
            "title": "What will suspense look like for the streaming case?",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-22T16:19:21Z",
            "updated_at": "2019-11-22T16:21:05Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17425",
            "title": "SuspenseList revealOrder=\"forwards\" has issues when Suspense is nested in another element",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-21T19:44:06Z",
            "updated_at": "2020-02-20T04:59:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17413",
            "title": "SuspenseList gotcha with React.lazy",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-20T23:33:34Z",
            "updated_at": "2020-04-20T01:27:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17386",
            "title": "Feature Request: Soft Component",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-16T14:23:06Z",
            "updated_at": "2019-11-19T14:24:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17355",
            "title": "Should not already be working",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-13T16:35:19Z",
            "updated_at": "2020-11-05T22:35:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17352",
            "title": "Upgrade Rollup to 0.68.1+",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-13T04:07:32Z",
            "updated_at": "2020-03-15T07:58:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17351",
            "title": "Possibility to set min duration of Suspense fallback",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-13T00:33:43Z",
            "updated_at": "2020-09-16T16:26:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17306",
            "title": "img onLoad does not always fire in concurrent mode",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-07T19:29:09Z",
            "updated_at": "2020-02-06T17:21:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17301",
            "title": "react-test-renderer: the findByType method doesn't work with memo components",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-07T09:39:23Z",
            "updated_at": "2020-09-25T19:39:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17281",
            "title": "react-refresh: Dependent functions/data don't trigger refresh",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-05T20:13:09Z",
            "updated_at": "2020-07-31T13:51:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17276",
            "title": "Unexpected value order with useTransition",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-05T09:17:35Z",
            "updated_at": "2019-11-06T03:22:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17275",
            "title": "Is it possible to share contexts between renderers?",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-05T03:39:28Z",
            "updated_at": "2020-08-22T19:49:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17258",
            "title": "Bug - react onClick() doesn't work well on WKWebview - iOS 13",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-04T10:50:47Z",
            "updated_at": "2020-10-27T01:38:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17256",
            "title": "\"NotFoundError: Failed to execute 'removeChild' on 'Node'\" when using React.Fragment <></> with Chrome extension which does not modify the DOM tree below the root div of the React app",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-03T23:06:16Z",
            "updated_at": "2020-11-20T04:17:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17254",
            "title": "React DevTools w/ Electron: Profiler \"Reload and start profiling\" doesn't work due to XMLHttpRequest 'null' origin",
            "state": "open",
            "assignees": [],
            "created_at": "2019-11-02T10:44:08Z",
            "updated_at": "2019-11-02T15:45:02Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17239",
            "title": "Blink with useTransition",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-31T15:33:52Z",
            "updated_at": "2020-07-21T21:40:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17208",
            "title": "Devtools tabs should not appear in chrome-extension pages when using react-devtools as an entry point",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-29T14:13:36Z",
            "updated_at": "2020-08-01T20:20:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17203",
            "title": "Empty object as SuspenseConfig acts like infinite timeout",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-28T10:46:54Z",
            "updated_at": "2020-04-01T21:27:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17190",
            "title": "useTransition hook name already exits in the ecosystem",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-26T09:22:05Z",
            "updated_at": "2019-11-05T07:00:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17185",
            "title": "useDeferredValue does not abort running reconcile work for stale value",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-25T22:59:18Z",
            "updated_at": "2020-07-25T11:10:52Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17180",
            "title": "Suggestion: Block unsafe javascript: URLs in Concurrent and Blocking Modes",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-25T07:48:03Z",
            "updated_at": "2019-10-31T14:03:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17168",
            "title": "Script tags are rendered inconsistently between client and server (html-encoded on server)",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-23T01:58:52Z",
            "updated_at": "2020-08-23T01:26:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17153",
            "title": "Infinite loop of errors when host config is missing `getRootHostContext`",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-20T21:43:45Z",
            "updated_at": "2020-01-08T23:42:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17140",
            "title": "SuspenseList in DevTools could cycle through the Suspense states",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-18T20:59:21Z",
            "updated_at": "2020-01-08T19:08:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17064",
            "title": "mouseEnter behaves like mouseOver when using ReactDOM.render() to mount a child element",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-11T07:28:30Z",
            "updated_at": "2020-04-01T22:07:46Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/17003",
            "title": "DevTools not properly shutting down between reloads in some cases",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-10-03T16:24:08Z",
            "updated_at": "2020-01-08T19:09:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16993",
            "title": "Add DevTools visualization for SSR hydration",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "sebmarkbage",
                    "id": 63648,
                    "node_id": "MDQ6VXNlcjYzNjQ4",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/63648?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/sebmarkbage",
                    "html_url": "https://github.com/sebmarkbage",
                    "followers_url": "https://api.github.com/users/sebmarkbage/followers",
                    "following_url": "https://api.github.com/users/sebmarkbage/following{/other_user}",
                    "gists_url": "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/sebmarkbage/subscriptions",
                    "organizations_url": "https://api.github.com/users/sebmarkbage/orgs",
                    "repos_url": "https://api.github.com/users/sebmarkbage/repos",
                    "events_url": "https://api.github.com/users/sebmarkbage/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/sebmarkbage/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-10-02T22:01:29Z",
            "updated_at": "2020-01-08T19:09:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16980",
            "title": "React DevTools recording commit without any component re-render",
            "state": "open",
            "assignees": [],
            "created_at": "2019-10-02T01:20:38Z",
            "updated_at": "2020-08-31T15:24:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16965",
            "title": "Devtools Inspect Button Doesn't Work with Repeat Selections",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-09-30T23:07:10Z",
            "updated_at": "2020-01-08T19:09:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16956",
            "title": "Design decision: why do we need the stale closure problem in the first place?",
            "state": "open",
            "assignees": [],
            "created_at": "2019-09-30T11:07:44Z",
            "updated_at": "2020-06-01T15:31:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16904",
            "title": "More time between releasing @next and @latest",
            "state": "open",
            "assignees": [],
            "created_at": "2019-09-26T14:18:06Z",
            "updated_at": "2019-09-27T06:31:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16873",
            "title": "[eslint-plugin-react-hooks] allow configuring custom hooks as \"static\"",
            "state": "open",
            "assignees": [],
            "created_at": "2019-09-24T11:45:13Z",
            "updated_at": "2020-08-31T17:58:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16848",
            "title": "React DOM SSR crashes since React-Dom 16.6.2",
            "state": "open",
            "assignees": [],
            "created_at": "2019-09-21T12:03:22Z",
            "updated_at": "2020-01-09T22:05:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16606",
            "title": "TypeError: \"'requestAnimationFrame' called on an object that does not implement interface Window.\"",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-29T05:25:38Z",
            "updated_at": "2019-08-31T01:25:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16599",
            "title": "New plugin not working after change any props in debugger tools",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-28T14:49:53Z",
            "updated_at": "2019-09-12T15:48:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16589",
            "title": "Confusing error when passing non-function to useMemo",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-27T20:41:37Z",
            "updated_at": "2020-07-23T18:27:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16566",
            "title": "onMouseEnter event missing when component hides on top of another (i.e. contextual menu)",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-25T16:56:06Z",
            "updated_at": "2020-04-01T22:31:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16550",
            "title": "Devtools scrollbar hides flamegraph",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-23T02:55:42Z",
            "updated_at": "2019-11-27T15:29:14Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16547",
            "title": "Devtools v4 does not work with Firefox's private window",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-22T16:42:22Z",
            "updated_at": "2020-10-12T20:22:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16505",
            "title": "Chrome's Custom Formatters",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-20T07:56:30Z",
            "updated_at": "2020-01-19T17:36:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16501",
            "title": "Getting maximum call stack exceeded on backend.js when rendering many elements.",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-08-20T02:40:23Z",
            "updated_at": "2020-05-17T21:10:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16496",
            "title": "DevTools: Write tests for preserving selection",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:27:51Z",
            "updated_at": "2020-01-08T19:10:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16495",
            "title": "DevTools: Components tree is sometimes unexpectedly empty after navigation",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:27:13Z",
            "updated_at": "2020-01-08T19:10:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16494",
            "title": "DevTools: Audit places where we change tags or disconnect alternates in React",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:26:58Z",
            "updated_at": "2020-01-08T19:10:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16493",
            "title": "DevTools: Fix or silence \"cannot find fiber with ID\" warnings when hovering ",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-08-19T22:26:25Z",
            "updated_at": "2020-11-25T09:48:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16490",
            "title": "DevTools: Check if accessibility regressions exist compared to old DevTools",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:25:36Z",
            "updated_at": "2020-01-08T19:11:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16489",
            "title": "DevTools: Suspense Debugger",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:25:26Z",
            "updated_at": "2020-01-08T19:11:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16488",
            "title": "DevTools: Re-enable postMessage transferable for faster ArrayBuffer transfers",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:24:43Z",
            "updated_at": "2020-01-08T19:11:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16487",
            "title": "DevTools: Crashes and warnings when quickly collapsing",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:24:17Z",
            "updated_at": "2020-01-08T19:10:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16486",
            "title": "DevTools: Elements height being clipped by console",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:20:56Z",
            "updated_at": "2020-01-08T19:10:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16483",
            "title": "DevTools: Better linking between browser Performance tab and DevTools Profiler",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:07:31Z",
            "updated_at": "2020-01-08T19:10:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16482",
            "title": "DevTools: Should Profiler surface the base duration?",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:07:02Z",
            "updated_at": "2020-01-08T19:10:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16481",
            "title": "DevTools: Collect more info when profiling",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:06:29Z",
            "updated_at": "2020-04-17T18:37:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16480",
            "title": "DevTools: Fix disabled hooks lint rule",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T22:06:06Z",
            "updated_at": "2020-01-08T19:10:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16478",
            "title": "DevTools: Component bookmarks",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:57:12Z",
            "updated_at": "2020-01-08T19:10:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16477",
            "title": "DevTools: Profiler: Show which hooks changed",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:56:36Z",
            "updated_at": "2020-09-11T17:43:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16474",
            "title": "DevTools: Named hooks",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:50:31Z",
            "updated_at": "2020-11-08T20:11:40Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16472",
            "title": "DevTools: Keyboard arrow-key navigation for the flamegraph view",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:49:15Z",
            "updated_at": "2020-01-08T19:10:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16471",
            "title": "DevTools: React Native: Support reload-and-profile be an important feature",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:47:53Z",
            "updated_at": "2020-01-08T19:10:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16470",
            "title": "DevTools: React Native: Remember saved component filters between reloads",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:47:06Z",
            "updated_at": "2020-01-08T19:10:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16469",
            "title": "DevTools: Triggering Error Boundaries from DevTools",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:44:50Z",
            "updated_at": "2020-11-14T12:30:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16468",
            "title": "Remember saved component filters by url or in bookmarks",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:43:09Z",
            "updated_at": "2020-07-25T19:40:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16465",
            "title": "DevTools: Occasional FOUC when loading DevTools",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:38:01Z",
            "updated_at": "2020-01-08T19:10:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16463",
            "title": "DevTools: An easier way to see all siblings",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T21:34:16Z",
            "updated_at": "2020-02-08T07:47:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16456",
            "title": "React DevTools: styling overrides global styles",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-19T16:07:25Z",
            "updated_at": "2020-01-04T10:14:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16444",
            "title": "Refactor ProfilerContext to use reducer instead of multi-state",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-18T15:40:40Z",
            "updated_at": "2020-01-08T19:10:52Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16416",
            "title": "SSR: Cannot set property 'memoizedState' of null",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-16T09:10:04Z",
            "updated_at": "2020-05-12T02:38:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16376",
            "title": "Add Priorities for All Event Types",
            "state": "open",
            "assignees": [
                {
                    "login": "acdlite",
                    "id": 3624098,
                    "node_id": "MDQ6VXNlcjM2MjQwOTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/acdlite",
                    "html_url": "https://github.com/acdlite",
                    "followers_url": "https://api.github.com/users/acdlite/followers",
                    "following_url": "https://api.github.com/users/acdlite/following{/other_user}",
                    "gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
                    "organizations_url": "https://api.github.com/users/acdlite/orgs",
                    "repos_url": "https://api.github.com/users/acdlite/repos",
                    "events_url": "https://api.github.com/users/acdlite/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/acdlite/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-08-13T05:27:07Z",
            "updated_at": "2020-01-08T19:11:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16374",
            "title": "Verify that Dehydrated Boundaries (and SuspenseList) Works with DevTools",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-08-12T23:12:21Z",
            "updated_at": "2020-01-08T19:11:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16365",
            "title": "ErrorBoundary rendering multiple copies of itself when ref assignment fails",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-12T14:12:35Z",
            "updated_at": "2020-01-09T17:05:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16342",
            "title": "textarea does not show warning when switching from uncontrolled to controlled like inputs do",
            "state": "open",
            "assignees": [],
            "created_at": "2019-08-09T19:15:55Z",
            "updated_at": "2019-12-01T22:39:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16265",
            "title": "Warning for 'exhaustive-deps' keeps asking for the full 'props' object instead of allowing single 'props' properties as dependencies",
            "state": "open",
            "assignees": [],
            "created_at": "2019-07-31T11:18:04Z",
            "updated_at": "2020-10-21T16:42:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16258",
            "title": "[Regression] onChange behaviour on radio buttons",
            "state": "open",
            "assignees": [],
            "created_at": "2019-07-30T22:42:14Z",
            "updated_at": "2020-04-01T21:19:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16161",
            "title": "onBeforeInput fires after browser updates the DOM for special characters like \"中\" or 😣on Firefox and Edge",
            "state": "open",
            "assignees": [],
            "created_at": "2019-07-19T00:07:06Z",
            "updated_at": "2020-04-01T21:19:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/16087",
            "title": "[Umbrella] Memory Leaks",
            "state": "open",
            "assignees": [],
            "created_at": "2019-07-09T00:17:45Z",
            "updated_at": "2020-09-23T20:27:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15989",
            "title": "Collapsible Error Dialogs for the Ecosystem",
            "state": "open",
            "assignees": [],
            "created_at": "2019-06-25T17:09:07Z",
            "updated_at": "2020-01-08T19:11:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15988",
            "title": "getDerivedStateFromError for Control Flow",
            "state": "open",
            "assignees": [],
            "created_at": "2019-06-25T17:05:13Z",
            "updated_at": "2020-01-08T19:11:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15879",
            "title": "Component delegation to context",
            "state": "open",
            "assignees": [],
            "created_at": "2019-06-13T17:47:48Z",
            "updated_at": "2019-06-13T17:47:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15739",
            "title": "Controlled input makes browser not saving submitted value (for autocomplete)",
            "state": "open",
            "assignees": [],
            "created_at": "2019-05-25T12:18:13Z",
            "updated_at": "2020-04-01T22:43:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15727",
            "title": "Root-level performance events",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                },
                {
                    "login": "sebmarkbage",
                    "id": 63648,
                    "node_id": "MDQ6VXNlcjYzNjQ4",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/63648?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/sebmarkbage",
                    "html_url": "https://github.com/sebmarkbage",
                    "followers_url": "https://api.github.com/users/sebmarkbage/followers",
                    "following_url": "https://api.github.com/users/sebmarkbage/following{/other_user}",
                    "gists_url": "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/sebmarkbage/subscriptions",
                    "organizations_url": "https://api.github.com/users/sebmarkbage/orgs",
                    "repos_url": "https://api.github.com/users/sebmarkbage/repos",
                    "events_url": "https://api.github.com/users/sebmarkbage/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/sebmarkbage/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-05-23T23:00:28Z",
            "updated_at": "2020-01-08T19:12:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15726",
            "title": "Improving the component logging/debugging experience",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-05-23T22:37:15Z",
            "updated_at": "2020-02-11T08:41:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15520",
            "title": "Cannot suppress error boundary output using react-test-renderer",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-27T12:50:04Z",
            "updated_at": "2020-07-25T05:09:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15488",
            "title": "eslint-plugin-react-hooks suggests adding a dependency on a function that always changes",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-24T17:50:17Z",
            "updated_at": "2020-01-08T23:42:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15486",
            "title": "<details> open attribute not synchronised",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-24T13:55:30Z",
            "updated_at": "2020-08-06T04:22:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15484",
            "title": "An error in render() + boundary behaves unexpectedly on ReactDOM.hydrate()",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-24T10:27:18Z",
            "updated_at": "2020-04-18T07:08:05Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15446",
            "title": "Events before Client Side Hydration",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-18T16:09:41Z",
            "updated_at": "2020-10-01T12:33:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15439",
            "title": "act() should warn in testing frameworks besides jest ",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-18T09:59:04Z",
            "updated_at": "2020-01-08T19:12:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15418",
            "title": "Field type=\"email\" with multiple attribute cursor jumps to start",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-15T08:32:08Z",
            "updated_at": "2020-11-06T20:35:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15344",
            "title": "useReducer's dispatch should return a promise which resolves once its action has been delivered",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-07T00:04:45Z",
            "updated_at": "2020-11-10T15:28:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15317",
            "title": "[Concurrent] Safely disposing uncommitted objects",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-04T09:17:29Z",
            "updated_at": "2020-11-22T01:07:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15293",
            "title": "Is it recommended to fetch in effect or should it be imperative",
            "state": "open",
            "assignees": [],
            "created_at": "2019-04-02T05:34:28Z",
            "updated_at": "2019-04-04T11:08:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15278",
            "title": "useMemo / useCallback cache busting opt out",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-31T22:12:07Z",
            "updated_at": "2020-01-04T09:45:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15255",
            "title": "Profiler marks",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2019-03-29T17:33:27Z",
            "updated_at": "2020-02-11T03:48:34Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15240",
            "title": "Dancing between state and effects - a real-world use case",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-28T16:41:29Z",
            "updated_at": "2019-10-08T21:39:01Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15238",
            "title": "Noscript tags no longer rendering components in 16.5.0",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-28T15:56:11Z",
            "updated_at": "2020-08-18T14:54:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15221",
            "title": "Hook equivalent for `getSnapshotBeforeUpdate`",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-27T02:29:09Z",
            "updated_at": "2020-10-21T09:57:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15207",
            "title": "Memoized components should forward displayName",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-25T15:57:20Z",
            "updated_at": "2020-08-16T17:41:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15188",
            "title": "useEffect can very quickly consume free quotas or cost money when used with 3rd party services",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-22T07:40:58Z",
            "updated_at": "2019-03-23T16:00:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15187",
            "title": "Edge 18 & IE 11 server mismatch with SVG icons",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-21T23:43:04Z",
            "updated_at": "2020-07-14T03:40:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15176",
            "title": "React callback ref cleanup function",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-21T09:44:36Z",
            "updated_at": "2020-03-02T10:20:42Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15171",
            "title": "dangerouslySetInnerHTML is left empty on client render on top of bad server markup when rendering HTML",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-20T20:35:18Z",
            "updated_at": "2020-09-04T21:52:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15154",
            "title": "Effect memoization and immutable data structures",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-19T17:58:05Z",
            "updated_at": "2019-03-22T16:07:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15153",
            "title": "eslint-plugin-react-hooks - autofix useCallback/useMemo behaviour",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-19T17:54:16Z",
            "updated_at": "2019-03-19T18:21:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15129",
            "title": "Hooks - unmount and didUpdate",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-16T19:50:01Z",
            "updated_at": "2019-03-18T14:33:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15088",
            "title": "useReducer - eagerReducer optimization discussion/questions",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-12T09:57:43Z",
            "updated_at": "2019-04-04T06:34:03Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15080",
            "title": "Consider exporting `batchedUpdates` from React",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-10T23:51:41Z",
            "updated_at": "2020-02-29T19:10:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15069",
            "title": "Can an error boundary prevent React's error logging?",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-08T20:11:45Z",
            "updated_at": "2020-09-01T19:49:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15039",
            "title": "react-debug-tools doesn't support legacy context (Component.contextTypes)",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-06T16:54:36Z",
            "updated_at": "2020-09-03T02:51:41Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15019",
            "title": "The browser crashes when use React.lazy return Promise.resolve(undefined)",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-05T15:45:18Z",
            "updated_at": "2020-01-09T21:59:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15012",
            "title": "`data-reactroot=\"\"` lost in server render if element inside `<Context.Provider>`",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-04T23:46:54Z",
            "updated_at": "2019-03-25T21:07:33Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/15006",
            "title": "useEffect memory leak when setting state in fetch promise",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-03T23:23:36Z",
            "updated_at": "2020-08-14T17:21:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14994",
            "title": "useState not bailing out when state does not change",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-01T19:05:10Z",
            "updated_at": "2020-04-24T21:36:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14988",
            "title": "Subscription to event listener in useEffect can miss an update",
            "state": "open",
            "assignees": [],
            "created_at": "2019-03-01T10:01:51Z",
            "updated_at": "2019-07-01T19:33:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14980",
            "title": "Misleading error description when using wrong useRef",
            "state": "open",
            "assignees": [],
            "created_at": "2019-02-28T17:35:45Z",
            "updated_at": "2020-03-23T13:48:52Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14962",
            "title": "Password input type causes memory leak",
            "state": "open",
            "assignees": [],
            "created_at": "2019-02-26T20:39:50Z",
            "updated_at": "2020-05-12T16:56:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14878",
            "title": "Simple memo components being updated with new set of props during context change",
            "state": "open",
            "assignees": [],
            "created_at": "2019-02-18T13:08:58Z",
            "updated_at": "2020-01-12T19:23:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14856",
            "title": "Chrome 73 breaks wheel events",
            "state": "open",
            "assignees": [],
            "created_at": "2019-02-14T20:28:58Z",
            "updated_at": "2020-08-31T00:37:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14785",
            "title": "defaultValue does not work with input when type is set to submit",
            "state": "open",
            "assignees": [],
            "created_at": "2019-02-07T09:01:40Z",
            "updated_at": "2019-02-08T16:27:02Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14750",
            "title": "Simultaneous key events in effect handled out of order",
            "state": "open",
            "assignees": [],
            "created_at": "2019-02-03T02:57:23Z",
            "updated_at": "2020-04-01T23:04:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14694",
            "title": "Chrome Autofill overwrites values on controlled components",
            "state": "open",
            "assignees": [],
            "created_at": "2019-01-24T18:42:29Z",
            "updated_at": "2019-02-04T15:19:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14669",
            "title": "Write a test for discrete events in Concurrent Mode",
            "state": "open",
            "assignees": [],
            "created_at": "2019-01-23T15:29:27Z",
            "updated_at": "2020-10-07T18:38:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14658",
            "title": "`useCallback()` & `useMemo()` automatically with a Babel Plug-in",
            "state": "open",
            "assignees": [],
            "created_at": "2019-01-22T15:38:42Z",
            "updated_at": "2019-03-10T06:45:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14543",
            "title": "Add `get` function to `useState`",
            "state": "open",
            "assignees": [],
            "created_at": "2019-01-08T07:51:31Z",
            "updated_at": "2019-03-31T15:33:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14540",
            "title": "Nested portals should be discoverable",
            "state": "open",
            "assignees": [],
            "created_at": "2019-01-07T04:02:48Z",
            "updated_at": "2020-10-12T01:57:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14535",
            "title": "Concurrent mode iOS hover behaviour",
            "state": "open",
            "assignees": [],
            "created_at": "2019-01-05T21:56:43Z",
            "updated_at": "2019-01-23T14:39:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14452",
            "title": "Wrong visualization order in User Timing when profiling in Chrome",
            "state": "open",
            "assignees": [],
            "created_at": "2018-12-17T15:10:19Z",
            "updated_at": "2019-02-08T17:17:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14443",
            "title": "Warning should appear when versions of react and react-dom do not match",
            "state": "open",
            "assignees": [],
            "created_at": "2018-12-14T18:28:45Z",
            "updated_at": "2019-01-29T22:35:39Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14398",
            "title": "calculating context changes in componentDidUpdate",
            "state": "open",
            "assignees": [],
            "created_at": "2018-12-06T15:26:50Z",
            "updated_at": "2020-10-27T17:09:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14357",
            "title": "findDOMNode deprecation",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-29T16:24:15Z",
            "updated_at": "2020-10-15T05:31:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14356",
            "title": "Sometimes controlled email inputs break in Chrome due to punycoding",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-29T13:22:22Z",
            "updated_at": "2020-06-18T19:51:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14342",
            "title": "Fail to render input in a separate window on Edge",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-28T07:15:54Z",
            "updated_at": "2020-01-09T07:15:40Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14337",
            "title": "[react-dom] getEventKey has IE11 key mapping issue",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-27T20:57:59Z",
            "updated_at": "2020-01-10T17:01:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14319",
            "title": "API for display name on forwardRef, memo and potential future exotic components",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-24T20:28:16Z",
            "updated_at": "2020-07-18T09:24:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14292",
            "title": "Provide a way to pass context to renderToStaticMarkup on the client",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-20T13:47:08Z",
            "updated_at": "2020-01-08T19:14:36Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14285",
            "title": "Warn when calling dispatch() from useEffect() cleanup function on unmounting",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-20T03:34:44Z",
            "updated_at": "2019-03-15T08:36:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14213",
            "title": "Textarea loses focus after inserting paired punctuation with Chinese IME",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-13T08:26:59Z",
            "updated_at": "2018-11-15T03:06:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14170",
            "title": "react-test-renderer doesn't support Suspense and lazy nodes",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-09T07:27:53Z",
            "updated_at": "2019-08-18T20:00:33Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14168",
            "title": "Input type email bug",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-09T05:28:29Z",
            "updated_at": "2020-11-06T21:10:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14125",
            "title": "Autofocus Text puts cursor at end instead of beginning",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-06T18:57:12Z",
            "updated_at": "2020-03-25T07:45:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14099",
            "title": "useCallback() invalidates too often in practice",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-05T15:06:53Z",
            "updated_at": "2020-07-16T09:40:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14057",
            "title": "Unexpected copies of the props object retained in memory with the new hooks API",
            "state": "open",
            "assignees": [],
            "created_at": "2018-11-01T02:48:53Z",
            "updated_at": "2020-01-11T16:36:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/14049",
            "title": "Using both getDerivedStateFromError and getDerivedStateFromProps can be a foot gun",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-31T20:10:47Z",
            "updated_at": "2020-09-15T11:28:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13991",
            "title": "Hooks + multiple instances of React",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-27T00:34:08Z",
            "updated_at": "2020-11-28T20:56:14Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13989",
            "title": "nextContext arg in shouldComponentUpdate() method",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-26T16:09:52Z",
            "updated_at": "2020-01-16T20:21:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13970",
            "title": "16.6 contextType + getDerivedStateFromProps",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-25T17:04:42Z",
            "updated_at": "2020-10-12T02:02:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13956",
            "title": "onMouseEnter does not fire on an underlaying element if an element above is removed",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-24T19:59:53Z",
            "updated_at": "2020-04-01T21:11:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13954",
            "title": "Receive previous state in getDerivedStateFromError",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-24T18:28:10Z",
            "updated_at": "2020-08-17T06:02:35Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13938",
            "title": "Error line number in Error Boundary",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-24T05:03:58Z",
            "updated_at": "2020-09-20T04:09:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13934",
            "title": "Update release script to handle alpha react-reconciler deps",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2018-10-23T22:37:35Z",
            "updated_at": "2020-01-08T19:15:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13876",
            "title": "Uncontrolled input type=\"checkbox\" reflects updating `defaultChecked` in Edge and Safari",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-17T19:40:11Z",
            "updated_at": "2020-04-01T23:12:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13838",
            "title": "head > meta > content escaping issue",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-12T12:01:36Z",
            "updated_at": "2020-08-18T17:59:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13798",
            "title": "JAWS reads non-interactive elements as Clickable",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-10T14:07:16Z",
            "updated_at": "2019-01-29T20:48:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13796",
            "title": "batch.commit() doesn't empty existing container",
            "state": "open",
            "assignees": [],
            "created_at": "2018-10-09T18:07:22Z",
            "updated_at": "2020-01-08T23:42:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13681",
            "title": "How to prevent ReactDOM.render errors from bubbling when otherwise explicitly handled",
            "state": "open",
            "assignees": [],
            "created_at": "2018-09-18T17:48:47Z",
            "updated_at": "2019-10-02T00:27:48Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13651",
            "title": "input[type='number'] value isn't updated",
            "state": "open",
            "assignees": [],
            "created_at": "2018-09-14T13:40:11Z",
            "updated_at": "2020-11-14T18:10:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13567",
            "title": "Consider stopping auto-adding `px` to number style values (except for a small whitelist)",
            "state": "open",
            "assignees": [],
            "created_at": "2018-09-05T16:08:37Z",
            "updated_at": "2019-05-14T14:49:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13560",
            "title": "Remove Factory Components",
            "state": "open",
            "assignees": [],
            "created_at": "2018-09-04T22:54:03Z",
            "updated_at": "2020-01-08T19:16:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13559",
            "title": "\"scheduler\" package umbrella",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2018-09-04T22:38:53Z",
            "updated_at": "2020-01-08T19:16:13Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13508",
            "title": "Relax ToString consistency guarantees",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-29T14:50:15Z",
            "updated_at": "2020-01-08T19:16:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13499",
            "title": "Number input breaks when letter \"e\" is entered",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-28T11:58:08Z",
            "updated_at": "2020-01-10T16:26:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13450",
            "title": "UMD builds are not enabled on UNPKG",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-21T08:14:19Z",
            "updated_at": "2020-09-03T19:52:10Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13424",
            "title": "onChange doesn't fire if input re-renders due to a setState() in a non-React capture phase listener",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-17T16:41:41Z",
            "updated_at": "2020-11-04T17:11:52Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13413",
            "title": "Umbrella: Chopping Block",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-16T03:50:15Z",
            "updated_at": "2020-01-08T19:16:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13400",
            "title": "Boolean DOM properties coerce empty string to false, contrary to HTML standard",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-14T23:04:45Z",
            "updated_at": "2018-08-15T00:22:01Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13342",
            "title": "RFC: Omit end tags when possible in ReactDOMServerRenderer",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-07T17:41:53Z",
            "updated_at": "2018-10-05T20:56:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13332",
            "title": "Support cross-renderer portals",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-06T19:26:11Z",
            "updated_at": "2020-11-12T22:31:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13306",
            "title": "[Umbrella] Releasing Time Slicing",
            "state": "open",
            "assignees": [],
            "created_at": "2018-08-01T23:28:02Z",
            "updated_at": "2020-01-08T19:16:10Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13224",
            "title": "Seal or Prevent Extensions on Pooled Events",
            "state": "open",
            "assignees": [],
            "created_at": "2018-07-17T21:57:39Z",
            "updated_at": "2020-01-08T19:16:45Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13212",
            "title": "Investigate IE/Edge select rendering bug",
            "state": "open",
            "assignees": [],
            "created_at": "2018-07-15T21:36:18Z",
            "updated_at": "2020-04-01T21:08:37Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13206",
            "title": "[Umbrella] Releasing Suspense",
            "state": "open",
            "assignees": [],
            "created_at": "2018-07-13T20:01:03Z",
            "updated_at": "2020-10-20T03:35:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13204",
            "title": "Longterm support for Internet Explorer",
            "state": "open",
            "assignees": [],
            "created_at": "2018-07-13T14:23:24Z",
            "updated_at": "2019-02-01T23:07:14Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13115",
            "title": "onMouseLeave false triggering when using svg <use> in IE11",
            "state": "open",
            "assignees": [],
            "created_at": "2018-06-27T12:11:18Z",
            "updated_at": "2020-04-01T21:06:37Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13104",
            "title": "add support for SyntheticKeyboardEvent#isComposing",
            "state": "open",
            "assignees": [],
            "created_at": "2018-06-24T21:49:31Z",
            "updated_at": "2020-09-12T03:15:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13097",
            "title": "Add support for hydrating portals",
            "state": "open",
            "assignees": [],
            "created_at": "2018-06-22T18:45:31Z",
            "updated_at": "2020-08-05T20:50:18Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/13044",
            "title": "Allow Portals to be used for Reparenting",
            "state": "open",
            "assignees": [],
            "created_at": "2018-06-14T14:01:27Z",
            "updated_at": "2020-08-04T18:12:34Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12989",
            "title": "Consider removing Mobile Safari empty onclick hack",
            "state": "open",
            "assignees": [],
            "created_at": "2018-06-07T00:36:14Z",
            "updated_at": "2020-01-08T19:16:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12749",
            "title": "IE 11 \"prompt to remember password\" regression bug since 15.2.0",
            "state": "open",
            "assignees": [],
            "created_at": "2018-05-05T15:09:17Z",
            "updated_at": "2019-03-04T12:21:15Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12717",
            "title": "onMouseDown causes splash on real ios browsers",
            "state": "open",
            "assignees": [],
            "created_at": "2018-04-29T14:27:00Z",
            "updated_at": "2018-08-06T23:10:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12615",
            "title": "Unexpected warning when hydrating with portal and SSR",
            "state": "open",
            "assignees": [],
            "created_at": "2018-04-15T07:50:53Z",
            "updated_at": "2020-09-25T23:50:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12441",
            "title": "Dangerous strings can reach browser builtins",
            "state": "open",
            "assignees": [],
            "created_at": "2018-03-23T15:16:28Z",
            "updated_at": "2019-04-24T15:28:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12363",
            "title": "React onBlur events not firing during unmount",
            "state": "open",
            "assignees": [],
            "created_at": "2018-03-13T17:38:08Z",
            "updated_at": "2020-07-08T10:47:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12334",
            "title": "For Controlled Input, step does not work as expected unless initialized with null or \"\".",
            "state": "open",
            "assignees": [],
            "created_at": "2018-03-06T10:30:40Z",
            "updated_at": "2019-01-12T18:45:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12235",
            "title": "Extracting a Context Stack",
            "state": "open",
            "assignees": [],
            "created_at": "2018-02-16T00:04:58Z",
            "updated_at": "2020-01-08T19:17:21Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12209",
            "title": "Warn if stringifying an attribute takes too long",
            "state": "open",
            "assignees": [],
            "created_at": "2018-02-11T18:14:28Z",
            "updated_at": "2020-10-07T13:54:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/12073",
            "title": "Fabric Todos",
            "state": "open",
            "assignees": [],
            "created_at": "2018-01-22T17:55:39Z",
            "updated_at": "2020-01-08T19:17:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11972",
            "title": "Consider removing mouseenter/mouseleave polyfill",
            "state": "open",
            "assignees": [],
            "created_at": "2018-01-05T16:00:10Z",
            "updated_at": "2020-01-08T19:17:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11949",
            "title": "Output JUnit XML test metadata for CircleCI",
            "state": "open",
            "assignees": [],
            "created_at": "2018-01-02T18:08:39Z",
            "updated_at": "2020-01-08T23:42:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11935",
            "title": "Consider a more specific warning for key={undefined}",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-30T17:00:45Z",
            "updated_at": "2020-01-30T13:30:33Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11896",
            "title": "Stop syncing value attribute for controlled inputs",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-20T18:21:41Z",
            "updated_at": "2018-10-04T06:30:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11881",
            "title": "backspace fails to clear values on input type='email'",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-18T18:21:42Z",
            "updated_at": "2019-10-03T01:16:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11877",
            "title": "Number input gets cleared when typing period as decimal mark",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-18T11:29:42Z",
            "updated_at": "2019-03-25T23:38:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11866",
            "title": "Improve accidental `void` return in render props?",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-16T02:02:35Z",
            "updated_at": "2020-01-08T19:17:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11827",
            "title": "Cursor jumps when backspacing in a number input (with ShadowDOM)",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-11T16:08:07Z",
            "updated_at": "2018-01-15T15:20:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11826",
            "title": "React does not call onBlur callback",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-11T13:20:59Z",
            "updated_at": "2020-06-18T16:55:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11805",
            "title": "Run benchmark trials in random order",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-08T01:09:11Z",
            "updated_at": "2020-01-08T19:17:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11799",
            "title": "Consider removing XML compatibility from SSR or hiding it behind an option",
            "state": "open",
            "assignees": [],
            "created_at": "2017-12-07T22:05:51Z",
            "updated_at": "2020-08-25T13:43:07Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11734",
            "title": "value|defaultValue={Symbol|Function} should be ignored, not stringified",
            "state": "open",
            "assignees": [
                {
                    "login": "nhunzaker",
                    "id": 590904,
                    "node_id": "MDQ6VXNlcjU5MDkwNA==",
                    "avatar_url": "https://avatars3.githubusercontent.com/u/590904?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/nhunzaker",
                    "html_url": "https://github.com/nhunzaker",
                    "followers_url": "https://api.github.com/users/nhunzaker/followers",
                    "following_url": "https://api.github.com/users/nhunzaker/following{/other_user}",
                    "gists_url": "https://api.github.com/users/nhunzaker/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/nhunzaker/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/nhunzaker/subscriptions",
                    "organizations_url": "https://api.github.com/users/nhunzaker/orgs",
                    "repos_url": "https://api.github.com/users/nhunzaker/repos",
                    "events_url": "https://api.github.com/users/nhunzaker/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/nhunzaker/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2017-12-01T01:01:08Z",
            "updated_at": "2020-05-21T04:25:49Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11689",
            "title": "Remove support for TapEventPlugin",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-28T20:49:30Z",
            "updated_at": "2020-01-08T19:17:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11678",
            "title": "Disabled button click event propagates in IE11",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-27T23:55:54Z",
            "updated_at": "2020-01-10T19:00:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11674",
            "title": "Resetting a form containing a focused controlled number input puts it out of step with state",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-27T21:29:06Z",
            "updated_at": "2018-08-30T23:27:11Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11667",
            "title": "RFC: Drop isAttributeNameSafe() check in React 17",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-26T22:50:11Z",
            "updated_at": "2020-01-08T19:17:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11609",
            "title": "Undo operation on text input throws exception in IE9",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-21T14:24:38Z",
            "updated_at": "2018-06-02T21:35:39Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11570",
            "title": "Reword \"unknown property\" warning to be less obnoxious",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-16T13:40:45Z",
            "updated_at": "2020-01-08T19:17:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11566",
            "title": "[Umbrella] New algorithm for resuming interrupted work",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-15T21:24:06Z",
            "updated_at": "2020-01-08T19:17:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11565",
            "title": "React-test-renderer: support for portal",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-15T19:40:29Z",
            "updated_at": "2020-10-27T21:57:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11503",
            "title": "Formalize top-level ES exports",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-09T15:56:42Z",
            "updated_at": "2020-11-11T19:48:22Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11461",
            "title": "[RN] Don't receive events on unknown tags",
            "state": "open",
            "assignees": [],
            "created_at": "2017-11-05T12:03:39Z",
            "updated_at": "2020-01-08T19:17:53Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11417",
            "title": "Treat value={null} as empty string",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-31T21:10:34Z",
            "updated_at": "2019-03-15T17:10:34Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11387",
            "title": "createPortal: support option to stop propagation of events in React tree",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-27T15:36:49Z",
            "updated_at": "2020-08-18T12:17:05Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11369",
            "title": "React should recognize the `valueAsDate` property on DOM elements",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-26T13:37:14Z",
            "updated_at": "2020-10-13T08:03:16Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11347",
            "title": "RFC: Plan for custom element attributes/properties in React 18",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-24T05:28:49Z",
            "updated_at": "2020-11-11T15:27:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11330",
            "title": "Consider Publishing External requestIdleCallback Polyfill",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-22T22:16:59Z",
            "updated_at": "2020-10-07T18:38:32Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11211",
            "title": "Use the native `beforeinput` event if it's supported",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-13T01:45:04Z",
            "updated_at": "2020-11-05T07:19:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11101",
            "title": "Type Fiber by tag as disjoint union",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-04T23:26:51Z",
            "updated_at": "2020-01-08T19:18:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11097",
            "title": "Umbrella: React DOM Bugs",
            "state": "open",
            "assignees": [],
            "created_at": "2017-10-04T22:02:59Z",
            "updated_at": "2020-01-08T19:18:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/11073",
            "title": "Performance enhancements in niche situations",
            "state": "open",
            "assignees": [
                {
                    "login": "gaearon",
                    "id": 810438,
                    "node_id": "MDQ6VXNlcjgxMDQzOA==",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/gaearon",
                    "html_url": "https://github.com/gaearon",
                    "followers_url": "https://api.github.com/users/gaearon/followers",
                    "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
                    "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
                    "organizations_url": "https://api.github.com/users/gaearon/orgs",
                    "repos_url": "https://api.github.com/users/gaearon/repos",
                    "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/gaearon/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2017-10-03T21:14:04Z",
            "updated_at": "2017-11-03T15:25:10Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10871",
            "title": "Multiple onFocus events fired on single focus in Safari",
            "state": "open",
            "assignees": [],
            "created_at": "2017-09-27T13:18:30Z",
            "updated_at": "2019-04-08T21:40:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10713",
            "title": "What should portals do when container has a child managed by React?",
            "state": "open",
            "assignees": [],
            "created_at": "2017-09-14T21:46:38Z",
            "updated_at": "2019-11-12T13:38:00Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10703",
            "title": "A faster diff algorithm",
            "state": "open",
            "assignees": [],
            "created_at": "2017-09-13T23:33:37Z",
            "updated_at": "2019-11-12T08:52:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10657",
            "title": "BFcache, SSR and form elements",
            "state": "open",
            "assignees": [],
            "created_at": "2017-09-09T15:23:08Z",
            "updated_at": "2020-01-09T21:52:46Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10589",
            "title": "Make on/off, yes/no boolean attributes work",
            "state": "open",
            "assignees": [],
            "created_at": "2017-09-01T01:49:25Z",
            "updated_at": "2020-01-08T19:18:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10580",
            "title": "Implement Silent Updates in the State Update Queue",
            "state": "open",
            "assignees": [],
            "created_at": "2017-08-31T02:48:27Z",
            "updated_at": "2020-01-08T19:18:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10506",
            "title": "Symbol Tagging for dangerouslySetInnerHTML to Help Prevent XSS",
            "state": "open",
            "assignees": [],
            "created_at": "2017-08-22T01:13:23Z",
            "updated_at": "2020-01-08T19:18:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10474",
            "title": "The fake event trick for rethrowing errors in DEV fires unexpected global error handlers and makes testing harder",
            "state": "open",
            "assignees": [],
            "created_at": "2017-08-16T19:28:44Z",
            "updated_at": "2019-01-29T08:07:08Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10441",
            "title": "Cross-origin error passed to componentDidCatch incorrectly",
            "state": "open",
            "assignees": [
                {
                    "login": "bvaughn",
                    "id": 29597,
                    "node_id": "MDQ6VXNlcjI5NTk3",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/29597?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/bvaughn",
                    "html_url": "https://github.com/bvaughn",
                    "followers_url": "https://api.github.com/users/bvaughn/followers",
                    "following_url": "https://api.github.com/users/bvaughn/following{/other_user}",
                    "gists_url": "https://api.github.com/users/bvaughn/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/bvaughn/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/bvaughn/subscriptions",
                    "organizations_url": "https://api.github.com/users/bvaughn/orgs",
                    "repos_url": "https://api.github.com/users/bvaughn/repos",
                    "events_url": "https://api.github.com/users/bvaughn/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/bvaughn/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2017-08-11T15:25:18Z",
            "updated_at": "2020-02-13T18:32:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10389",
            "title": "<video /> attribute needed but not guaranteed by React",
            "state": "open",
            "assignees": [],
            "created_at": "2017-08-04T20:50:39Z",
            "updated_at": "2020-10-26T22:14:09Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10382",
            "title": "Too much unnecessary updates when a child element is moved to the front",
            "state": "open",
            "assignees": [],
            "created_at": "2017-08-04T13:18:50Z",
            "updated_at": "2018-03-01T13:28:14Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10143",
            "title": "Remove unstable_renderIntoContainer",
            "state": "open",
            "assignees": [],
            "created_at": "2017-07-11T12:25:32Z",
            "updated_at": "2020-01-08T19:18:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10109",
            "title": "Mouseenter event not triggered when cursor moves from disabled button",
            "state": "open",
            "assignees": [],
            "created_at": "2017-07-05T11:01:18Z",
            "updated_at": "2020-08-20T06:07:03Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10049",
            "title": "Render Callbacks Fire Even Though an Error Happened",
            "state": "open",
            "assignees": [
                {
                    "login": "acdlite",
                    "id": 3624098,
                    "node_id": "MDQ6VXNlcjM2MjQwOTg=",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/acdlite",
                    "html_url": "https://github.com/acdlite",
                    "followers_url": "https://api.github.com/users/acdlite/followers",
                    "following_url": "https://api.github.com/users/acdlite/following{/other_user}",
                    "gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
                    "organizations_url": "https://api.github.com/users/acdlite/orgs",
                    "repos_url": "https://api.github.com/users/acdlite/repos",
                    "events_url": "https://api.github.com/users/acdlite/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/acdlite/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2017-06-27T00:19:04Z",
            "updated_at": "2020-01-08T19:18:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/10021",
            "title": "Feature request: Add a \"module\" entry in package.json to export ES2015 version of React",
            "state": "open",
            "assignees": [],
            "created_at": "2017-06-21T21:09:32Z",
            "updated_at": "2020-09-11T04:16:12Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9999",
            "title": "False positive getDefaultProps warning when mixing development and production versions",
            "state": "open",
            "assignees": [],
            "created_at": "2017-06-19T05:50:17Z",
            "updated_at": "2020-02-03T08:00:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9866",
            "title": "Add More Cases to Server Rendering Fixture",
            "state": "open",
            "assignees": [],
            "created_at": "2017-06-06T17:31:30Z",
            "updated_at": "2020-01-08T19:18:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9832",
            "title": "Error when `__source` is provided to production build",
            "state": "open",
            "assignees": [],
            "created_at": "2017-06-01T20:48:02Z",
            "updated_at": "2020-01-08T19:18:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9821",
            "title": "Children forEach filters functions",
            "state": "open",
            "assignees": [],
            "created_at": "2017-05-31T07:36:59Z",
            "updated_at": "2019-03-26T06:01:47Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9657",
            "title": "[RFC] onChange -> onInput, and don't polyfill onInput for uncontrolled components",
            "state": "open",
            "assignees": [],
            "created_at": "2017-05-10T23:47:56Z",
            "updated_at": "2020-06-15T08:02:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9475",
            "title": "Seb's Deprecation Wishlist Umbrella",
            "state": "open",
            "assignees": [],
            "created_at": "2017-04-21T04:35:44Z",
            "updated_at": "2020-01-08T19:18:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9402",
            "title": "A number input will always have left pad 0 though parseFloat value in onChange",
            "state": "open",
            "assignees": [],
            "created_at": "2017-04-11T10:54:25Z",
            "updated_at": "2020-10-07T18:38:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9378",
            "title": "If ReactDOM.render is asynchronous, how to catch exceptions?",
            "state": "open",
            "assignees": [],
            "created_at": "2017-04-08T14:51:48Z",
            "updated_at": "2020-10-05T19:40:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9301",
            "title": "Define specific browser support guidelines",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-31T00:10:28Z",
            "updated_at": "2017-10-06T12:30:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9230",
            "title": "Boolean attributes on Web Components",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-21T15:09:51Z",
            "updated_at": "2019-12-07T23:48:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9223",
            "title": "Compiler Optimization Umbrella",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-20T16:08:03Z",
            "updated_at": "2020-01-08T19:19:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9189",
            "title": "Expose DEV-mode warnings in devtools UI",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-15T23:11:13Z",
            "updated_at": "2020-11-24T18:09:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9154",
            "title": "Serializing to \"HTML with only as much JS as necessary\"",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-10T20:04:07Z",
            "updated_at": "2020-01-15T17:41:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9142",
            "title": "No blur event fired when button is disabled/removed",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-09T18:13:08Z",
            "updated_at": "2020-10-07T18:38:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9128",
            "title": "Switch to using createFactory in compiler steps",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-07T03:36:44Z",
            "updated_at": "2020-01-08T19:19:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9100",
            "title": "Pasting text in text box does not fire change event on IE11.",
            "state": "open",
            "assignees": [],
            "created_at": "2017-03-03T02:00:10Z",
            "updated_at": "2018-08-18T01:50:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9075",
            "title": "React Perf Scenarios",
            "state": "open",
            "assignees": [
                {
                    "login": "gaearon",
                    "id": 810438,
                    "node_id": "MDQ6VXNlcjgxMDQzOA==",
                    "avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/gaearon",
                    "html_url": "https://github.com/gaearon",
                    "followers_url": "https://api.github.com/users/gaearon/followers",
                    "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
                    "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
                    "organizations_url": "https://api.github.com/users/gaearon/orgs",
                    "repos_url": "https://api.github.com/users/gaearon/repos",
                    "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/gaearon/received_events",
                    "type": "User",
                    "site_admin": false
                }
            ],
            "created_at": "2017-02-27T20:15:50Z",
            "updated_at": "2020-01-08T19:19:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9046",
            "title": "Disabling or destroying event's target stops further event propagation.",
            "state": "open",
            "assignees": [],
            "created_at": "2017-02-22T16:39:52Z",
            "updated_at": "2017-10-04T18:08:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/9023",
            "title": "event.preventDefault in click handler does not prevent onChange from being called",
            "state": "open",
            "assignees": [],
            "created_at": "2017-02-17T18:31:19Z",
            "updated_at": "2020-10-21T02:13:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8968",
            "title": "Chrome 56 breaks touch events",
            "state": "open",
            "assignees": [],
            "created_at": "2017-02-09T10:06:20Z",
            "updated_at": "2020-09-10T10:26:19Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8938",
            "title": "Clear button on iOS date input does not return correct event value",
            "state": "open",
            "assignees": [],
            "created_at": "2017-02-07T01:29:52Z",
            "updated_at": "2019-08-28T19:02:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8733",
            "title": "[Fiber] Should we clear an error boundary's update queue whenever it captures an error?",
            "state": "open",
            "assignees": [],
            "created_at": "2017-01-10T08:32:00Z",
            "updated_at": "2020-01-08T19:19:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8531",
            "title": "IE10 triggers onChange twice when replacing a text selection ",
            "state": "open",
            "assignees": [],
            "created_at": "2016-12-08T15:27:56Z",
            "updated_at": "2018-08-21T21:25:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8514",
            "title": "Undo behavior in controlled textareas works differently from the default behaviour in chrome",
            "state": "open",
            "assignees": [],
            "created_at": "2016-12-07T12:33:02Z",
            "updated_at": "2020-09-30T02:44:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8423",
            "title": "onChange does not work well with IE11 at Japanese IME. in React 15.4.0",
            "state": "open",
            "assignees": [],
            "created_at": "2016-11-26T00:52:03Z",
            "updated_at": "2019-10-04T01:40:05Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/8012",
            "title": "[Fiber] Formalize States",
            "state": "open",
            "assignees": [],
            "created_at": "2016-10-19T05:13:46Z",
            "updated_at": "2020-01-08T19:19:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7942",
            "title": "Fiber Principles: Contributing To Fiber",
            "state": "open",
            "assignees": [],
            "created_at": "2016-10-11T21:02:05Z",
            "updated_at": "2020-06-16T14:57:54Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7901",
            "title": "Bypass synthetic event system for Web Component events",
            "state": "open",
            "assignees": [],
            "created_at": "2016-10-06T19:27:26Z",
            "updated_at": "2020-01-16T19:02:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7769",
            "title": "input autoFocus causes focus to be emitted before ref",
            "state": "open",
            "assignees": [],
            "created_at": "2016-09-19T20:56:27Z",
            "updated_at": "2019-06-18T12:33:12Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7711",
            "title": "[bug] click not disabled on <fieldset disabled><button onClick={() => alert('clicked')}><span>click me</span></button></fieldset>",
            "state": "open",
            "assignees": [],
            "created_at": "2016-09-13T11:28:53Z",
            "updated_at": "2020-01-21T14:19:43Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7552",
            "title": "Support Symbol keys for props",
            "state": "open",
            "assignees": [],
            "created_at": "2016-08-24T11:29:59Z",
            "updated_at": "2020-09-10T08:30:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7489",
            "title": "input element `setSelectionRange` after backspace does not work in IE10",
            "state": "open",
            "assignees": [],
            "created_at": "2016-08-13T06:07:51Z",
            "updated_at": "2018-08-17T20:16:38Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7415",
            "title": "Freeze classes and defaultProps in DEV mode",
            "state": "open",
            "assignees": [],
            "created_at": "2016-08-03T18:23:45Z",
            "updated_at": "2020-01-08T19:19:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7387",
            "title": "Attach Stack at setState Calls in DEV Mode",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-31T19:52:24Z",
            "updated_at": "2020-01-08T19:19:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7328",
            "title": "IE 11 and Edge no longer prompt to remember password on controlled form",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-21T12:26:25Z",
            "updated_at": "2018-08-29T23:50:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7324",
            "title": "Optimizing Compiler: Compiling to Internals",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-21T00:42:29Z",
            "updated_at": "2020-01-08T19:19:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7323",
            "title": "Optimizing Compiler: Component Folding",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-21T00:21:56Z",
            "updated_at": "2020-06-09T03:09:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7287",
            "title": "Discussion: should state be immutable by default?",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-15T17:15:49Z",
            "updated_at": "2017-11-03T15:54:44Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7281",
            "title": "Input onChange not triggered every time in IE11 if e.preventDefault() used",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-14T15:54:47Z",
            "updated_at": "2018-08-18T01:50:02Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7249",
            "title": "Attributes and properties for Custom Components",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-12T10:19:46Z",
            "updated_at": "2020-10-12T02:13:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7221",
            "title": "Consider exposing an opaque component path somehow",
            "state": "open",
            "assignees": [],
            "created_at": "2016-07-07T22:29:20Z",
            "updated_at": "2020-01-08T19:19:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/7135",
            "title": "onMouseEnter propagation in double reactroot",
            "state": "open",
            "assignees": [],
            "created_at": "2016-06-28T04:08:47Z",
            "updated_at": "2019-10-20T11:39:57Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6951",
            "title": "Changing state in onFocus and onChange for a select multiple element does not work in Firefox",
            "state": "open",
            "assignees": [],
            "created_at": "2016-06-02T12:57:36Z",
            "updated_at": "2018-07-15T02:17:49Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6927",
            "title": "Change event fires too many times when inputing Chinese characters in IE 9",
            "state": "open",
            "assignees": [],
            "created_at": "2016-05-31T06:40:13Z",
            "updated_at": "2018-08-18T01:49:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6807",
            "title": "onMouseLeave doesn't work if the node gets detached",
            "state": "open",
            "assignees": [],
            "created_at": "2016-05-19T16:10:59Z",
            "updated_at": "2019-09-22T21:09:31Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6683",
            "title": "RFC: Configure Warning Levels Using ENV Variable",
            "state": "open",
            "assignees": [],
            "created_at": "2016-05-02T23:17:24Z",
            "updated_at": "2020-01-08T19:19:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6627",
            "title": "Introduce __PROFILE__ build",
            "state": "open",
            "assignees": [],
            "created_at": "2016-04-27T02:17:42Z",
            "updated_at": "2020-01-08T19:20:29Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6541",
            "title": "Iframe load event not firing in Chrome and Safari when src is 'about:blank'",
            "state": "open",
            "assignees": [],
            "created_at": "2016-04-18T14:35:13Z",
            "updated_at": "2018-01-29T18:59:51Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6436",
            "title": "Support Passive Event Listeners",
            "state": "open",
            "assignees": [],
            "created_at": "2016-04-07T18:42:47Z",
            "updated_at": "2020-08-19T14:35:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6325",
            "title": "Consider Special Casing Certain DOM Attributes to Accept Elements",
            "state": "open",
            "assignees": [],
            "created_at": "2016-03-23T21:52:14Z",
            "updated_at": "2020-01-08T19:20:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6284",
            "title": "Form input name='nodeName' breaks onSubmit event handling",
            "state": "open",
            "assignees": [],
            "created_at": "2016-03-17T12:58:47Z",
            "updated_at": "2020-04-16T02:43:04Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6217",
            "title": "onResponderGrant called before onResponderTerminate",
            "state": "open",
            "assignees": [],
            "created_at": "2016-03-08T18:46:34Z",
            "updated_at": "2017-11-21T14:12:50Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/6190",
            "title": "Proposal: Get rid of pooling in synthetic event system",
            "state": "open",
            "assignees": [],
            "created_at": "2016-03-04T22:17:12Z",
            "updated_at": "2020-01-08T23:44:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/5700",
            "title": "DataTransfer's dropEffect not working on IE/Edge with not minified version react.js",
            "state": "open",
            "assignees": [],
            "created_at": "2015-12-21T16:28:31Z",
            "updated_at": "2020-05-06T15:41:06Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/5053",
            "title": "componentWasMounted/componentWasUpdated (formerly componentDidDisplay)",
            "state": "open",
            "assignees": [],
            "created_at": "2015-10-05T17:56:33Z",
            "updated_at": "2020-01-08T19:20:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/4751",
            "title": "Play Nicely with The DOM Event System (because it's legacy anyway)",
            "state": "open",
            "assignees": [],
            "created_at": "2015-09-01T02:25:32Z",
            "updated_at": "2020-01-08T19:20:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/4595",
            "title": "Externalize the State Tree (or alternatives)",
            "state": "open",
            "assignees": [],
            "created_at": "2015-08-10T20:32:19Z",
            "updated_at": "2020-02-03T21:23:59Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/4594",
            "title": "Hibernating State (Not Necessarily Serialized)",
            "state": "open",
            "assignees": [],
            "created_at": "2015-08-10T20:09:41Z",
            "updated_at": "2020-01-08T19:20:27Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/4593",
            "title": "Include DevTools as Public API",
            "state": "open",
            "assignees": [],
            "created_at": "2015-08-10T19:13:05Z",
            "updated_at": "2020-01-08T19:20:26Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/4166",
            "title": "Use Inline Event Handlers for trapBubbledEventsLocal and the iOS Safari Click Hack",
            "state": "open",
            "assignees": [],
            "created_at": "2015-06-18T05:00:09Z",
            "updated_at": "2020-01-08T19:20:56Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/4153",
            "title": "Support Stateful Test Renderer",
            "state": "open",
            "assignees": [],
            "created_at": "2015-06-17T06:03:11Z",
            "updated_at": "2020-01-08T19:20:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/3965",
            "title": "Support for reparenting",
            "state": "open",
            "assignees": [],
            "created_at": "2015-05-27T12:14:07Z",
            "updated_at": "2020-04-28T22:18:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/3926",
            "title": "Change event fires extra times before IME composition ends",
            "state": "open",
            "assignees": [],
            "created_at": "2015-05-21T06:30:30Z",
            "updated_at": "2020-09-28T07:56:20Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/3227",
            "title": "Optimizing Compiler: Tagging ReactElements",
            "state": "open",
            "assignees": [],
            "created_at": "2015-02-22T03:21:18Z",
            "updated_at": "2020-01-08T19:20:55Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/2193",
            "title": "getEventKey implementation inconsistent with DOM3 spec / Firefox implementation",
            "state": "open",
            "assignees": [],
            "created_at": "2014-09-15T04:41:21Z",
            "updated_at": "2018-06-25T18:11:25Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/1791",
            "title": "Add api for focus management",
            "state": "open",
            "assignees": [],
            "created_at": "2014-07-05T16:05:32Z",
            "updated_at": "2020-01-08T18:31:17Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/1739",
            "title": "Support asynchronous server rendering (waiting for data before rendering)",
            "state": "open",
            "assignees": [],
            "created_at": "2014-06-24T12:36:38Z",
            "updated_at": "2020-07-24T07:51:30Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/1355",
            "title": "touchmove doesn't fire on removed element",
            "state": "open",
            "assignees": [],
            "created_at": "2014-04-04T22:32:30Z",
            "updated_at": "2020-08-18T10:56:23Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/1259",
            "title": "Stop doing data-*, aria-*, start using dataSet",
            "state": "open",
            "assignees": [],
            "created_at": "2014-03-14T20:30:18Z",
            "updated_at": "2020-01-08T23:44:58Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/1253",
            "title": "iframe contents cause invariant violation",
            "state": "open",
            "assignees": [],
            "created_at": "2014-03-12T21:35:00Z",
            "updated_at": "2017-10-01T22:40:24Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/1159",
            "title": "Provide a way to handle browser-autocompleted form values on controlled components",
            "state": "open",
            "assignees": [],
            "created_at": "2014-02-22T02:05:11Z",
            "updated_at": "2020-10-27T18:48:28Z"
        },
        {
            "url": "https://api.github.com/repos/facebook/react/issues/285",
            "title": "Declarative API for installing global DOM event handlers",
            "state": "open",
            "assignees": [],
            "created_at": "2013-08-21T21:41:26Z",
            "updated_at": "2020-08-10T17:58:43Z"
        }
    ],
    "bIssueIsNormalized": true
}
