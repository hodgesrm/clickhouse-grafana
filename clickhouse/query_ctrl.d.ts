/// <reference path="../../../../../public/app/headers/common.d.ts" />
import SqlQuery from './sql_query';
import { QueryCtrl } from 'app/plugins/sdk';
declare class SqlQueryCtrl extends QueryCtrl {
    private templateSrv;
    private $q;
    private uiSegmentSrv;
    static templateUrl: string;
    queryModel: SqlQuery;
    queryBuilder: any;
    databaseSegment: any;
    dateColDataTypeSegment: any;
    dateTimeColDataTypeSegment: any;
    tagSegments: any[];
    selectMenu: any;
    tableSegment: any;
    removeTagFilterSegment: any;
    matchOperators: any;
    panel: any;
    datasource: any;
    target: any;
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any, $q: any, uiSegmentSrv: any);
    buildSelectMenu(): void;
    addSelectPart(selectParts: any, cat: any, subitem: any): void;
    removeSelectPart(selectParts: any, part: any): void;
    fixTagSegments(): void;
    tableChanged(): void;
    querySegment(type: string): any;
    getDatabaseSegments(): any;
    databaseChanged(): void;
    getDateColDataTypeSegments(): any;
    dateColDataTypeChanged(): void;
    getDateTimeColDataTypeSegments(): any;
    dateTimeColDataTypeChanged(): void;
    toggleEditorMode(): boolean;
    _toggleEditorMode(): void;
    refreshQuery(): void;
    getTableSegments(): any;
    getPartOptions(part: any): any;
    handleQueryError(err: any): any[];
    transformToSegments(addTemplateVars: any): (results: any) => any;
    getTagsOrValues(segment: any, index: any): any;
    tagSegmentUpdated(segment: any, index: any): void;
    rebuildTargetTagConditions(): void;
    getTagValueOperator(tagValue: any, tagOperator: any): any;
    getCollapsedText(): any;
}
export { SqlQueryCtrl };
