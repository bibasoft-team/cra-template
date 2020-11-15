import * as Apollo from '@apollo/client'
import * as Types from './generated/operations'
import {
	GetCoursesDocument,
	GetStoreCoursesDocument,
	GetStoreModulesDocument,
	GetStoreSlidesDocument,
	useAssignCourseMutation,
	useCreateStoreCourseMutation,
	useCreateStoreModuleMutation,
	useCreateStoreSlideMutation,
	useDeleteCourseMutation,
	useDeleteStoreCourseMutation,
	useDeleteStoreModuleMutation,
} from './generated/apollo'
import { updateArray, updateRelay } from './helperFunctions'

export function useCreateStoreCourse(
	baseOptions?: Apollo.MutationHookOptions<
		Types.ICreateStoreCourseMutation,
		Types.ICreateStoreCourseMutationVariables
	>,
) {
	return useCreateStoreCourseMutation({
		...baseOptions,
		update: updateRelay('create_store_course', GetStoreCoursesDocument, 'add', 'courses'),
	})
}

export function useDeleteStoreCourse(
	baseOptions?: Apollo.MutationHookOptions<
		Types.IDeleteStoreCourseMutation,
		Types.IDeleteStoreCourseMutationVariables
	>,
) {
	return useDeleteStoreCourseMutation({
		...baseOptions,
		update: updateRelay('delete_store_course', GetStoreCoursesDocument, 'delete', 'courses'),
	})
}

export function useCreateStoreModule(
	baseOptions?: Apollo.MutationHookOptions<
		Types.ICreateStoreModuleMutation,
		Types.ICreateStoreModuleMutationVariables
	>,
) {
	return useCreateStoreModuleMutation({
		...baseOptions,
		update: updateRelay('create_store_module', GetStoreModulesDocument, 'add', 'modules'),
	})
}

export function useDeleteStoreModule(
	baseOptions?: Apollo.MutationHookOptions<
		Types.IDeleteStoreModuleMutation,
		Types.IDeleteStoreModuleMutationVariables
	>,
) {
	return useDeleteStoreModuleMutation({
		...baseOptions,
		update: updateRelay('delete_store_module', GetStoreModulesDocument, 'delete', 'modules'),
	})
}

export function useCreateStoreSlide(
	baseOptions?: Apollo.MutationHookOptions<
		Types.ICreateStoreSlideMutation,
		Types.ICreateStoreSlideMutationVariables
	>,
) {
	return useCreateStoreSlideMutation({
		...baseOptions,
		update: updateRelay(
			'create_store_slide',
			GetStoreSlidesDocument,
			'add',
			'slides',
			baseOptions?.variables,
		),
	})
}

export function useDeleteCourse(
	baseOptions?: Apollo.MutationHookOptions<
		Types.IDeleteCourseMutation,
		Types.IDeleteCourseMutationVariables
	>,
) {
	return useDeleteCourseMutation({
		...baseOptions,
		update: updateArray('delete_course', GetCoursesDocument, 'delete', undefined),
	})
}

export function useAssignCourse(
	baseOptions?: Apollo.MutationHookOptions<
		Types.IAssignCourseMutation,
		Types.IAssignCourseMutationVariables
	>,
) {
	return useAssignCourseMutation({
		...baseOptions,
		update: updateArray('assign_course', GetCoursesDocument, 'add', undefined, undefined, 'append'),
	})
}
//

// export function useDeleteStoreSlide(
// 	baseOptions?: Apollo.MutationHookOptions<
// 		Types.IDeleteStoreModuleMutation,
// 		Types.IDeleteStoreModuleMutationVariables
// 	>,
// ) {
// 	return useDeleteStoreModuleMutation({
// 		...baseOptions,
// 		update: updateRelay('delete_store_module', GetStoreModulesDocument, 'delete', 'modules'),
// 	})
// }
